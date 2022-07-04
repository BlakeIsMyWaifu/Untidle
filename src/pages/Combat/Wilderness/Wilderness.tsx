import { Box, Group, Title } from '@mantine/core'
import { wildernessData } from 'data/combat/wildernessData'
import { FC } from 'react'

import Area from './Area'

const Wilderness: FC = () => {
	return (
		<Box>
			<Title order={2}>Wilderness</Title>

			<Group>
				{
					wildernessData.map(wilderness => {
						return <Area
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