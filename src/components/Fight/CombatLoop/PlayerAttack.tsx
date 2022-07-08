import { useInterval } from '@mantine/hooks'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, memo, useEffect } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useFightStore } from 'state/useFightStore'

const PlayerAttack: FC = () => {

	const enemyTakeDamage = useFightStore(state => state.enemyTakeDamage)
	const setPlayerAttackSpeed = useFightStore(state => state.setPlayerAttackSpeed)

	const playerAttackSpeed = useFightStore(state => state.playerAttackSpeed)

	const attackSpeedModifier = useCombatStore(state => state.stats['Attack Speed'])

	const playerAttack = (): void => {
		enemyTakeDamage(1)
	}
	const playerAttackInterval = useInterval(playerAttack, playerAttackSpeed)

	useMountEffect(() => {
		setPlayerAttackSpeed(5 * (1 + (attackSpeedModifier / 100)) * 1000)
	})

	useEffect(() => {
		playerAttackInterval.start()
		return playerAttackInterval.stop
	}, [playerAttackInterval])

	return null
}

export default memo(PlayerAttack)