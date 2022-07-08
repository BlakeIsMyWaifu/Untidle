import { Input, Progress } from '@mantine/core'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'

const PlayerHealth: FC = () => {

	const currentHealth = useCombatStore(state => state.currentHealth)
	const maxHealth = 10 // TODO add the actual max health

	const percentage = (currentHealth / maxHealth) * 100

	return (
		<Input.Wrapper label={`Player Health (${currentHealth} / ${maxHealth})`}>
			<Progress value={percentage} />
		</Input.Wrapper>
	)
}

export default PlayerHealth