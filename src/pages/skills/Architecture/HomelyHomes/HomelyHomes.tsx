import { Box, SimpleGrid, Title } from '@mantine/core'
import { homelyHomesData } from 'data/skills/architecture/homelyHomesData'
import { FC } from 'react'

import House from './House'

const HomelyHomes: FC = () => {
	return (
		<Box>
			<Title order={2}>Homely Homes</Title>

			<SimpleGrid cols={2} p='md'>
				{
					homelyHomesData.map(house => {
						return <House key={house.name} data={house} />
					})
				}
			</SimpleGrid>
		</Box>
	)
}

export default HomelyHomes