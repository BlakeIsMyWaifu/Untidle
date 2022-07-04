import { Center, Group } from '@mantine/core'
import { FC } from 'react'

import PlayerEquipment from './PlayerEquipment'

const Fight: FC = () => {
	return (
		<Center p='md'>
			<Group>
				<PlayerEquipment />
			</Group>
		</Center>
	)
}

export default Fight