import ProgressBar from 'components/ProgressBar'
import { usePlayerStats } from 'hooks/usePlayerStats'
import { FC, useEffect, useState } from 'react'
import { useFightStore } from 'state/useFightStore'

const PlayerAttackBar: FC = () => {

	const [playerAttackSpeed, setPlayerAttackSpeed] = useState(500)

	const attackSpeedModifier = usePlayerStats()['Attack Speed']

	useEffect(() => {
		setPlayerAttackSpeed(5 * (1 + (attackSpeedModifier / 100)) * 1000)
	}, [attackSpeedModifier, setPlayerAttackSpeed])

	const enemyTakeDamage = useFightStore(state => state.enemyTakeDamage)

	return <ProgressBar
		time={playerAttackSpeed}
		label={`Player Attack (${playerAttackSpeed / 1000}s)`}
		onComplete={() => {
			enemyTakeDamage(1)
		}}
	/>
}

export default PlayerAttackBar