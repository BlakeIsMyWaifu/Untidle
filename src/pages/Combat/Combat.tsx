import { Box, Title } from '@mantine/core'
import { FC } from 'react'

import Wilderness from './Wilderness/Wilderness'

const Combat: FC = () => {
	return (
		<Box>
			<Wilderness />

			<Title order={2}>Dungeons</Title>
		</Box>
	)
}

export default Combat