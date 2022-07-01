import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Berserker from './Berserker'
import Guardian from './Guardian'

const Strength: FC = () => {
	return (
		<Box>
			<Title order={2}>Strength</Title>

			<SkillCards skill='strength' subskills={{
				main: Hammer,
				berserker: Hammer,
				guardian: Hammer
			}} />

			<Berserker />

			<Guardian />
		</Box>
	)
}

export default Strength