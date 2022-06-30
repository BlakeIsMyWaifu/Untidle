import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Buffs from './Buffs'
import Debuffs from './Debuffs'
import Healing from './Healing'

const Alchemy: FC = () => {
	return (
		<Box>
			<Title order={2}>Alchemy</Title>

			<SkillCards skill='alchemy' subskills={{
				main: Hammer,
				buffs: Hammer,
				healing: Hammer,
				debuffs: Hammer
			}} />

			<Buffs />

			<Healing />

			<Debuffs />
		</Box>
	)
}

export default Alchemy