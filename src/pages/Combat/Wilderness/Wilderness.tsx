import { Box, Group, Title } from '@mantine/core'
import { wildernessData } from 'data/combat/wildernessData'
import { FC } from 'react'

import AreaButton from './AreaButton'

const Wilderness: FC = () => {
	return (
		<Box>
			<Title order={2}>Wilderness</Title>

			<Group>
				{
					Object.values(wildernessData).map(wilderness => {
						return <AreaButton
							key={wilderness.name}
							data={wilderness}
						/>
					})
				}
			</Group>
		</Box>
	)
}

export default Wilderness