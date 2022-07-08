import { useInterval } from '@mantine/hooks'
import { FC, memo, useEffect } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useFightStore } from 'state/useFightStore'

const EnemyAttack: FC = () => {

	const enemyStatsDamage = useFightStore(state => state.enemy?.stats.damage)
	const enemyStatsAttackSpeed = useFightStore(state => state.enemy?.stats.attackSpeed)

	const takeDamage = useCombatStore(state => state.takeDamage)

	const enemyAttack = (): void => {
		takeDamage(enemyStatsDamage ?? 0)
	}
	const enemyAttackInterval = useInterval(enemyAttack, enemyStatsAttackSpeed ?? 8_000)

	useEffect(() => {
		enemyAttackInterval.start()
		return enemyAttackInterval.stop
	}, [enemyAttackInterval])

	return null
}

export default memo(EnemyAttack)