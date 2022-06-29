import { Equipment } from 'data/items/equipment'
import { MaterialList } from 'data/items/materials'
import { findNextNum } from 'utils/maths'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'

type ItemStore = ItemStateSlice & ItemActionSlice

interface ItemStateSlice {
	materials: Record<string, number>;
	equipments: Record<string, Equipment>;
}

const initialItemState: ItemStateSlice = {
	materials: {},
	equipments: {}
}

const createItemStateSlice: Slice<ItemStore, ItemStateSlice> = () => initialItemState

interface ItemActionSlice {
	/**
	 * Adds a material to the players storage
	 *
	 * @param material - Name of a material to be added
	 * @param amount - Number of the given material to be added
	 * @returns void
	 */
	addMaterial: (material: MaterialList, amount: number) => void;

	/**
	 * Removes a material to the players storage
	 *
	 * @param material - Name of a material to be removed
	 * @param amount - Number of the given material to be removed
	 * @returns void
	 */
	removeMaterial: (material: MaterialList, amount: number) => void;

	/**
	 * Deletes **ALL** materials
	 *
	 * @returns void
	 */
	resetMaterials: () => void;

	/**
	 * Adds an equipment to the players storage
	 *
	 * @param equipment - Full equipment data not just a name
	 * @returns void
	 */
	addEquipment: (equipment: Equipment) => void; // TODO return the new equipments id

	/**
	 * Removes an equipment
	 *
	 * @param equipmentId - Id of the equipment to be removed
	 * @returns void
	 */
	removeEquipment: (equipmentId: number) => void;

	/**
	 * Deletes **ALL** equipment
	 *
	 * @returns void
	 */
	resetEquipment: () => void;
}

const createItemActionSlice: Slice<ItemStore, ItemActionSlice> = (set, get) => ({
	addMaterial: (material: MaterialList, amount: number) => {
		set(state => ({
			materials: {
				...state.materials,
				[material]: (state.materials[material] ?? 0) + amount
			}
		}))
	},
	removeMaterial: (material, amount) => {
		set(state => ({
			materials: {
				...state.materials,
				[material]: (state.materials[material] ?? 0) - amount
			}
		}))
	},
	resetMaterials: () => {
		set({
			materials: {}
		})
	},

	addEquipment: equipment => {
		const nextNum = findNextNum(Object.keys(get().equipments))
		set(state => ({
			equipments: {
				...state.equipments,
				[nextNum]: equipment
			}
		}))
	},
	removeEquipment: equipmentId => {
		const equipment = { ...get().equipments }
		delete equipment[equipmentId]
		set(() => ({ equipments: equipment }))
	},
	resetEquipment: () => {
		set({
			equipments: {}
		})
	}
})

export const useItemStore = create<ItemStore>()(persist((...a) => ({
	...createItemStateSlice(...a),
	...createItemActionSlice(...a)
}), {
	name: 'item',
	getStorage: () => storage
}))