import { Input, Progress } from '@mantine/core'
import { FC } from 'react'
import { useFightStore } from 'state/useFightStore'

const EnemyHealth: FC = () => {

	const enemyHealth = useFightStore(state => state.enemyHealth)
	const enemy = useFightStore(state => state.enemy)

	const currentHealth = enemyHealth
	const maxHealth = enemy?.stats.health ?? 1

	const percentage = (currentHealth / maxHealth) * 100

	return (
		<Input.Wrapper label={`Enemy Health (${currentHealth} / ${maxHealth})`}>
			<Progress value={percentage} />
		</Input.Wrapper>
	)
}

export default EnemyHealth