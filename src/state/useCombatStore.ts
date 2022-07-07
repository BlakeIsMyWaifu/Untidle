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

/**
 * 50% (5) =
 * (21 - AS) * 5 = 10
 *
 *
 * [50%, 50%, 25%] = ~80%
 * [.5 * .5 * .25] = 93.75%
 *
 * multiplicative would be .5 + (.5 * .5) for .75.
 * If you somehow had 3 stacking abilities for 50% 50% and 25% .5 + (.5 * .5) + (.5 * .5 * .25) = 93.75%
 *
 * 1 * (1+.2) * (1+.2) * (1+.2) = 1.728
 * 1 * (1 + .2 + .2 + .2) = 1.6
 *
 * Attack once every 5 seconds or 0.2 times a second
 * 150% = .5
 * 0.2 * (1 + 1.50)
 */

const initialCombatState: CombatStateSlice = {
	currentHealth: 10,
	inCombat: false,
	stats: {
		'Attack Speed': 0,
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