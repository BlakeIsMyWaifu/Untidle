import { Box, SimpleGrid } from '@mantine/core'
import { homelyHomesData } from 'data/skills/architecture/homelyHomesData'
import { FC } from 'react'

import House from './House'

const HomelyHomes: FC = () => {
	return (
		<Box>
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