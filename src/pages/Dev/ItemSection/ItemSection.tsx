import { Box } from '@mantine/core'
import { FC } from 'react'

import Equipment from './Equipment'
import Materials from './Materials'

const ItemSection: FC = () => {
	return (
		<Box>
			<Materials />
			<Equipment />
		</Box>
	)
}

export default ItemSection