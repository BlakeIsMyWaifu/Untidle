import { EnemyData } from 'data/combat/enemyData'
import { Dispatch, createContext } from 'react'

export interface FightState {
	enemyHealth: number;
	enemy: EnemyData | null;
	playerAttackSpeed: number;
}

export const fightInitialState: FightState = {
	enemyHealth: 10,
	enemy: null,
	playerAttackSpeed: 5000
}

export type FightAction =
	| { type: 'enemyTakeDamage'; amount: number }
	| { type: 'setEnemy'; enemy: EnemyData }
	| { type: 'setPlayerAttackSpeed'; amount: number }

export const fightReducer = (state: FightState, action: FightAction): FightState => {
	switch (action.type) {
		case 'enemyTakeDamage': {
			const { amount } = action
			return {
				...state,
				enemyHealth: state.enemyHealth - amount
			}
		}
		case 'setEnemy': {
			const { enemy } = action
			return {
				...state,
				enemy,
				enemyHealth: enemy.stats.health
			}
		}
		case 'setPlayerAttackSpeed': {
			const { amount } = action
			return {
				...state,
				playerAttackSpeed: amount
			}
		}
		default: {
			return state
		}
	}
}

export const FightContext = createContext<{
	state: FightState;
	dispatch: Dispatch<FightAction>;
}>({
	state: fightInitialState,
	dispatch: () => null
})