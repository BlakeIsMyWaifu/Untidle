import ProgressBar from 'components/ProgressBar'
import { FC } from 'react'
import { useFightStore } from 'state/useFightStore'

const EnemyAttackBar: FC = () => {

	const enemy = useFightStore(state => state.enemy)

	return <ProgressBar
		time={enemy?.stats['Attack Speed'] ?? 8000} // TODO does not work
		label={`Enemy Attack (${(enemy?.stats['Attack Speed'] ?? 0) / 1000}s)`}
	/>
}

export default EnemyAttackBar