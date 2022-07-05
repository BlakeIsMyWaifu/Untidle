import { EquipmentSlot, StatsList } from 'data/items/equipment'
import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

type CombatStore = CombatStateSlice & CombatActionSlice

interface CombatStateSlice {
	currentHealth: number;
	inCombat: boolean;
	stats: Record<StatsList, number>;
	equipment: Record<EquipmentSlot, string | null>;
}

const initialCombatState: CombatStateSlice = {
	currentHealth: 10,
	inCombat: false,
	stats: {
		'Attack Speed': 1,
		'Critical Chance': 0,
		'Critical Damage': 0,
		'Critical Resistance': 0,
		'Dodge': 0,
		'Health Regeneration': 0,
		'Lifesteal': 0,
		'Magic Find': 0,
		'Magical Damage': 0,
		'Magical Penetration': 0,
		'Magical Pierce': 0,
		'Magical Resistance': 0,
		'Maximum Health Percentage': 0,
		'Maximum Health': 0,
		'Movement Speed': 0,
		'Physical Damage': 5,
		'Physical Penetration': 0,
		'Physical Pierce': 0,
		'Physical Resistance': 0,
		'Slaying': 0
	},
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
}

const createCombatActionSlice: Slice<CombatStore, CombatActionSlice> = set => ({
	takeDamage: amount => {
		set(state => ({
			currentHealth: state.currentHealth - amount
		}))
	}
})

export const useCombatStore = create<CombatStore>()(persist((...a) => ({
	...createCombatStateSlice(...a),
	...createCombatActionSlice(...a)
}), {
	name: 'combat',
	getStorage: () => storage
}))