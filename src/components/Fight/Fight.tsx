import { Group } from '@mantine/core'
import { EnemyData } from 'data/combat/enemyData'
import { FC } from 'react'

import Enemy from './Enemy'
import PlayerEquipment from './PlayerEquipment'

interface FightProps {
	enemy: EnemyData;
}

const Fight: FC<FightProps> = ({ enemy }) => {
	return (
		<Group align='stretch' position='center'>
			<PlayerEquipment />

			<Enemy data={enemy} />
		</Group>
	)
}

export default Fight