import { Equipment } from 'data/items/equipment'
import { MaterialList } from 'data/items/materials'
import create, { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { ZustandPersist } from './commonTypes'
import { storage } from './storage'

interface ItemStateSlice {
	materials: Record<string, number>;
	equipments: Equipment[];
}

const initialItemState: ItemStateSlice = {
	materials: {},
	equipments: []
}

type ItemStore = ItemStateSlice & ItemActionSlice

const createItemStateSlice: StateCreator<ItemStore, [ZustandPersist], [], ItemStateSlice> = () => initialItemState

interface ItemActionSlice {
	addMaterials: (material: MaterialList, amount: number) => void;
	removeMaterial: (material: MaterialList, amount: number) => void;
	addEquipment: (equipment: Equipment) => void;
	reset: () => void;
}

const createItemActionSlice: StateCreator<ItemStore, [ZustandPersist], [], ItemActionSlice> = set => ({
	addMaterials: (material: MaterialList, amount: number) => {
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
	addEquipment: equipment => {
		set(state => ({
			equipments: [...state.equipments, equipment]
		}))
	},
	reset: () => {
		set({
			materials: {},
			equipments: []
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