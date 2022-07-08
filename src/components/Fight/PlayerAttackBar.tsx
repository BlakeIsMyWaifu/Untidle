import ProgressBar from 'components/ProgressBar'
import { FC } from 'react'
import { useFightStore } from 'state/useFightStore'

const PlayerAttackBar: FC = () => {

	const playerAttackSpeed = useFightStore(state => state.playerAttackSpeed)

	return <ProgressBar
		time={playerAttackSpeed}
		label={`Player Attack (${playerAttackSpeed / 1000}s)`}
	/>
}

export default PlayerAttackBar