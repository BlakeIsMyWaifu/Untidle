import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Chaos from './Chaos'
import Elemental from './Elemental'

const Sorcery: FC = () => {
	return (
		<Box>
			<Title order={2}>Sorcery</Title>

			<SkillCards skill='sorcery' subskills={{
				main: Hammer,
				elemental: Hammer,
				chaos: Hammer
			}} />

			<Elemental />

			<Chaos />
		</Box>
	)
}

export default Sorcery