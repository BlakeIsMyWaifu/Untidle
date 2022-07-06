import { Box } from '@mantine/core'
import { FC, useContext } from 'react'

import { FightContext } from './FightState'

const EnemyHealth: FC = () => {

	const { state } = useContext(FightContext)

	return (
		<Box>
			{state.enemyHealth}
		</Box>
	)
}

export default EnemyHealth