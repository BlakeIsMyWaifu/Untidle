import { Input, Progress } from '@mantine/core'
import { FC, useContext } from 'react'

import { FightContext } from './FightState'

const EnemyHealth: FC = () => {

	const { state } = useContext(FightContext)

	const currentHealth = state.enemyHealth
	const maxHealth = state.enemy?.stats.health ?? 1

	const percentage = (currentHealth / maxHealth) * 100

	return (
		<Input.Wrapper label={`Enemy Health (${currentHealth} / ${maxHealth})`}>
			<Progress value={percentage} />
		</Input.Wrapper>
	)
}

export default EnemyHealth