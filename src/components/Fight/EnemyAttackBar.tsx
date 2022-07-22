import ProgressBar from 'components/ProgressBar'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useFightStore } from 'state/useFightStore'

const EnemyAttackBar: FC = () => {
	const enemyStatsDamage = useFightStore(state => state.enemy?.stats['Physical Damage']) ?? 1
	const enemyStatsAttackSpeed = useFightStore(state => state.enemy?.stats['Attack Speed']) ?? 8000

	const takeDamage = useCombatStore(state => state.takeDamage)

	return <ProgressBar
		time={enemyStatsAttackSpeed} // TODO does not work
		label={`Enemy Attack (${(enemyStatsAttackSpeed) / 1000}s)`}
		onComplete={() => {
			takeDamage(enemyStatsDamage)
		}}
	/>
}

export default EnemyAttackBar