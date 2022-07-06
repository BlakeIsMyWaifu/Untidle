import { useInterval } from '@mantine/hooks'
import { EnemyData } from 'data/combat/enemyData'
import { FC, useContext, useEffect } from 'react'
import { useCombatStore } from 'state/useCombatStore'

import { FightContext } from './FightState'

interface CombatLoopProps {
	enemy: EnemyData;
}

const CombatLoop: FC<CombatLoopProps> = () => {

	const { dispatch } = useContext(FightContext)

	const combatStore = useCombatStore()

	const playerAttackSpeed = 5 * (1 + (combatStore.stats['Attack Speed'] / 100)) * 1000
	const playerAttack = (): void => {
		dispatch({ type: 'enemyTakeDamage', amount: 1 })
	}
	const playerAttackInterval = useInterval(playerAttack, playerAttackSpeed)

	useEffect(() => {
		playerAttackInterval.start()
		return playerAttackInterval.stop
	}, [playerAttackInterval])

	return null
}

export default CombatLoop