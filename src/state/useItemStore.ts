import { Equipment } from 'data/items/equipment'
import { MaterialList } from 'data/items/materials'
import { findNextNum } from 'utils/maths'
import create, { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { ZustandPersist } from './commonTypes'
import { storage } from './storage'

interface ItemStateSlice {
	materials: Record<string, number>;
	equipments: Record<string, Equipment>;
}

const initialItemState: ItemStateSlice = {
	materials: {},
	equipments: {}
}

type ItemStore = ItemStateSlice & ItemActionSlice

const createItemStateSlice: StateCreator<ItemStore, [ZustandPersist], [], ItemStateSlice> = () => initialItemState

interface ItemActionSlice {
	addMaterial: (material: MaterialList, amount: number) => void;
	removeMaterial: (material: MaterialList, amount: number) => void;
	resetMaterials: () => void;

	addEquipment: (equipment: Equipment) => void;
	removeEquipment: (equipmentId: number) => void;
	resetEquipment: () => void;
}

const createItemActionSlice: StateCreator<ItemStore, [ZustandPersist], [], ItemActionSlice> = (set, get) => ({
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