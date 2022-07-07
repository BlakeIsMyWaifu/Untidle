import { Dispatch, createContext } from 'react'

export interface FightState {
	enemyHealth: number;
	playerAttackSpeed: number;
}

export const fightInitialState: FightState = {
	enemyHealth: 10,
	playerAttackSpeed: 5000
}

export type FightAction =
	| { type: 'enemyTakeDamage'; amount: number }
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