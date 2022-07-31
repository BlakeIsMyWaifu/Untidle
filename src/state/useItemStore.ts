import { CollectedEquipment, EquipmentList, getEquipment, statsList } from 'data/items/equipment'
import { MaterialList } from 'data/items/materials'
import { Slice } from 'types/zustand'
import { findNextNum, randomNum } from 'utils/maths'
import { randomArrayElement } from 'utils/randomElement'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

type ItemStore = ItemStateSlice & ItemActionSlice

interface ItemStateSlice {
	materials: Record<string, number>;
	equipments: Record<string, CollectedEquipment>;
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
	 * @param materialName - Name of a material to be added
	 * @param amount - Number of the given material to be added
	 * @returns void
	 */
	addMaterial: (materialName: MaterialList, amount: number) => void;

	/**
	 * Removes a material to the players storage
	 *
	 * @param materialName - Name of a material to be removed
	 * @param amount - Number of the given material to be removed
	 * @returns void
	 */
	removeMaterial: (materialName: MaterialList, amount: number) => void;

	/**
	 * Deletes **ALL** materials
	 *
	 * @returns void
	 */
	resetMaterials: () => void;

	/**
	 * Adds an equipment to the players storage.
	 * The equipment is also given random stats.
	 *
	 * @param equipmentName - Name of equipment to be added
	 * @returns void
	 */
	addEquipment: (equipmentName: EquipmentList) => void; // TODO return the new equipments id

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
	addMaterial: (materialName: MaterialList, amount: number) => {
		set(state => ({
			materials: {
				...state.materials,
				[materialName]: (state.materials[materialName] ?? 0) + amount
			}
		}))
	},
	removeMaterial: (materialName, amount) => {
		set(state => ({
			materials: {
				...state.materials,
				[materialName]: (state.materials[materialName] ?? 0) - amount
			}
		}))
	},
	resetMaterials: () => {
		set({
			materials: {}
		})
	},

	addEquipment: equipmentName => {
		const equipment = getEquipment(equipmentName)

		const nextNum = findNextNum(Object.keys(get().equipments))

		const quality = randomNum(100, 50)

		const statOne = randomArrayElement(statsList) // TODO scale the amount of stats and the amount off the equipment rarity
		const statTwo = randomArrayElement(statsList)
		const statThree = randomArrayElement(statsList)

		set(state => ({
			equipments: {
				...state.equipments,
				[nextNum]: {
					...equipment,
					id: nextNum,
					quality,
					stats: {
						[statOne]: quality,
						[statTwo]: quality,
						[statThree]: quality
					}
				}
			}
		}))
	},
	removeEquipment: equipmentId => {
		const equipment = { ...get().equipments }
		delete equipment[equipmentId]
		set(() => ({ equipments: equipment }))
	},
	resetEquipment: () => {
		set({ equipments: {} })
	}
})

export const useItemStore = create<ItemStore>()(persist((...a) => ({
	...createItemStateSlice(...a),
	...createItemActionSlice(...a)
}), {
	name: 'item',
	getStorage: () => storage
}))