import { EnemyData } from 'data/combat/enemyData'
import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

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
}

const createFightActionSlice: Slice<FightStore, FightActionSlice> = set => ({
	enemyTakeDamage: amount => {
		set(state => ({
			enemyHealth: state.enemyHealth - amount
		}))
	},
	setEnemy: enemy => {
		set({
			enemy,
			enemyHealth: enemy?.stats.health ?? 0
		})
	},
	setPlayerAttackSpeed: amount => {
		set({ playerAttackSpeed: amount })
	}
})

export const useFightStore = create<FightStore>()(persist((...a) => ({
	...createFightStateSlice(...a),
	...createFightActionSlice(...a)
}), {
	name: 'fight',
	getStorage: () => storage
}))