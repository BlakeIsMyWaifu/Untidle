import { FC } from 'react'

import EnemyAttack from './EnemyAttack'
import PlayerAttack from './PlayerAttack'

const CombatLoop: FC = () => {
	return <>
		<PlayerAttack />
		<EnemyAttack />
	</>
}

export default CombatLoop