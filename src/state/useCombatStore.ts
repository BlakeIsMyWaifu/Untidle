import { EquipmentSlot } from 'data/items/equipment'
import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

type CombatStore = CombatStateSlice & CombatActionSlice

interface CombatStateSlice {
	currentHealth: number;
	inCombat: boolean;
	equipment: Record<EquipmentSlot, string | null>;
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
	}
}

const createCombatStateSlice: Slice<CombatStore, CombatStateSlice> = () => initialCombatState

interface CombatActionSlice {
	takeDamage: (amount: number) => void;
	healPlayer: () => void;
}

const createCombatActionSlice: Slice<CombatStore, CombatActionSlice> = set => ({
	takeDamage: amount => {
		set(state => ({
			currentHealth: state.currentHealth - amount
		}))
	},
	healPlayer: () => {
		set({
			currentHealth: 10 // TODO add the actual max health
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