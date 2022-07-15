import { EquipmentList, EquipmentSlot } from 'data/items/equipment'
import { ItemType } from 'data/items/items'
import { MaterialList } from 'data/items/materials'
import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'
import { useItemStore } from './useItemStore'

type CombatStore = CombatStateSlice & CombatActionSlice

interface CombatStateSlice {
	currentHealth: number;
	inCombat: boolean;
	equipment: Record<EquipmentSlot, string | null>;
	maxLoot: number;
	loot: Partial<Record<MaterialList | EquipmentList, [ItemType, number]>>;
}

const initialCombatState: CombatStateSlice = {
	currentHealth: 10,
	inCombat: false,
	equipment: {
		mainHand: null,
		offHand: null,
		ammo: null,
		helmet: null,
		chest: null,
		pants: null,
		pauldron: null,
		bracer: null,
		gloves: null,
		ring: null,
		amulet: null,
		belt: null
	},
	maxLoot: 24,
	loot: {}
}

const createCombatStateSlice: Slice<CombatStore, CombatStateSlice> = () => initialCombatState

interface CombatActionSlice {
	takeDamage: (amount: number) => void;
	healPlayer: () => void;

	/**
	 * Changes the equipped item in the given slot.
	 * It does not check if the equipmentId is valid so this must be done before called.
	 * It also does not check if the equipment can be equipped in the given slot so it also should be checked before called.
	 *
	 * @param equipmentSlot - Slot where to equip the equipment
	 * @param equipmentId - The id of the collected equipment
	 * @returns void
	 */
	changeEquipment: (equipmentSlot: EquipmentSlot, equipmentId: number | null) => void;
	addLoot: (itemName: MaterialList | EquipmentList, itemType: ItemType, amount?: number) => void;
	collectLoot: () => void;
}

const createCombatActionSlice: Slice<CombatStore, CombatActionSlice> = (set, get) => ({
	takeDamage: amount => {
		set(state => ({
			currentHealth: state.currentHealth - amount
		}))
	},
	healPlayer: () => {
		set({
			currentHealth: 10 // TODO add the actual max health
		})
	},
	changeEquipment: (slot, equipmentId) => {
		set(state => ({
			equipment: {
				...state.equipment,
				[slot]: equipmentId?.toString() ?? null
			}
		}))
	},
	addLoot: (itemName, itemType, amount = 1) => {
		const currentLoot = get().loot[itemName]
		if (currentLoot) {
			set(state => ({
				loot: {
					...state.loot,
					[itemName]: [currentLoot[0], currentLoot[1] + amount]
				}
			}))
		} else {
			set(state => ({
				loot: {
					...state.loot,
					[itemName]: [itemType, amount]
				}
			}))
		}
	},
	collectLoot: () => {
		const { addMaterial, addEquipment } = useItemStore.getState()
		const { loot } = get()

		Object.entries(loot).forEach(([itemName, itemInfo]) => {
			if (!itemInfo) return
			const [itemType, amount] = itemInfo

			if (itemType === 'material') {
				addMaterial(itemName, amount)
			} else {
				Array.from({ length: amount }).forEach(() => addEquipment(itemName))
			}
		})

		set({
			loot: {}
		})
	}
})

export const useCombatStore = create<CombatStore>()(persist((...a) => ({
	...createCombatStateSlice(...a),
	...createCombatActionSlice(...a)
}), {
	name: 'combat',
	getStorage: () => storage
}))