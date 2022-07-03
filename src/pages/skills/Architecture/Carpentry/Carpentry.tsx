import { Box, SimpleGrid, Title } from '@mantine/core'
import { carpentryData } from 'data/skills/architecture/carpentryData'
import { FC } from 'react'

import Furniture from './Furniture'

const Carpentry: FC = () => {
	return (
		<Box>
			<Title order={2}>Carpentry</Title>

			<SimpleGrid cols={2} p='md'>
				{
					carpentryData.map(furniture => {
						return <Furniture key={furniture.name} data={furniture} />
					})
				}
			</SimpleGrid>
		</Box>
	)
}

export default Carpentry