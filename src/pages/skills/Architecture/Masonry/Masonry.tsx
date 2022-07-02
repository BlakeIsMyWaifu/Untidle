import { Box, Title } from '@mantine/core'
import { FC } from 'react'

import HomelyHomes from './HomelyHomes'

const Masonry: FC = () => {
	return (
		<Box>
			<Title order={2}>Masonry</Title>

			<HomelyHomes />
		</Box>
	)
}

export default Masonry