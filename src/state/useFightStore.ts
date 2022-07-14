import { EnemyData } from 'data/combat/enemyData'
import { ItemType } from 'data/items/items'
import { Slice } from 'types/zustand'
import { randomNum } from 'utils/maths'
import { randomArrayElement, randomArrayElementUndefined, randomKeyValuePair } from 'utils/randomElement'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'
import { useCombatStore } from './useCombatStore'

type FightStore = FightStateSlice & FightActionSlice

interface FightStateSlice {
	enemyHealth: number;
	enemy: EnemyData | null;
	playerAttackSpeed: number;
}

const initialFightState: FightStateSlice = {
	enemyHealth: 10,
	enemy: null,
	playerAttackSpeed: 5000
}

const createFightStateSlice: Slice<FightStore, FightStateSlice> = () => initialFightState

interface FightActionSlice {
	enemyTakeDamage: (amount: number) => void;
	setEnemy: (enemy: EnemyData | null) => void;
	setPlayerAttackSpeed: (amount: number) => void;
	enemyDropLoot: () => void;
}

const createFightActionSlice: Slice<FightStore, FightActionSlice> = (set, get) => ({
	enemyTakeDamage: amount => {
		set(state => ({
			enemyHealth: state.enemyHealth - amount
		}))
	},
	setEnemy: enemy => {
		set({
			enemy,
			enemyHealth: enemy?.stats['Maximum Health'] ?? 0 // TODO calculate health
		})
	},
	setPlayerAttackSpeed: amount => {
		set({ playerAttackSpeed: amount })
	},
	enemyDropLoot: () => {
		const { enemy } = get()
		if (!enemy) throw new Error('enemyDropLoot was called without an enemy')

		const { drops } = enemy
		const dropType = randomArrayElement<ItemType>(['material', 'equipment']) // TODO improved randomness

		const { addLoot } = useCombatStore.getState()

		if (dropType === 'material') {
			const item = randomKeyValuePair(drops.material)
			if (!item) return
			const [itemName, randomAmount] = item
			const amount = randomAmount ? randomNum(randomAmount[1], randomAmount[0]) : 1
			addLoot(itemName, 'material', amount)
		} else {
			const itemName = randomArrayElementUndefined(drops.equipment)
			if (!itemName) return
			addLoot(itemName, 'equipment')
		}
	}
})

export const useFightStore = create<FightStore>()(persist((...a) => ({
	...createFightStateSlice(...a),
	...createFightActionSlice(...a)
}), {
	name: 'fight',
	getStorage: () => storage
}))