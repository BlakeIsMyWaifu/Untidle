import { Box, Title } from '@mantine/core'
import { FC } from 'react'

import Woodcutting from './Woodcutting'

const Survival: FC = () => {
	return (
		<Box>
			<Title order={1} m='xl'>Survival</Title>

			<Woodcutting />
		</Box>
	)
}

export default Survival