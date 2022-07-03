import { Box, SimpleGrid, Title } from '@mantine/core'
import { guildData } from 'data/buildings/guilds'
import { uniqueData } from 'data/buildings/unique'
import { FC } from 'react'

import Building from './Building'

const Buildings: FC = () => {
	return (
		<Box>
			<Title order={2}>Buildings</Title>

			<SimpleGrid cols={4} p='md'>
				{
					Object.values(uniqueData).map(building => {
						return <Building key={building.name} data={building} />
					})
				}
				{
					Object.values(guildData).map(building => {
						return <Building key={building.name} data={building} />
					})
				}
			</SimpleGrid>
		</Box>
	)
}

export default Buildings