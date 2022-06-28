import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { ChristmasTree, Flame, Seeding, Trees } from 'tabler-icons-react'

import Firemaking from './Firemaking'
import Foraging from './Foraging'
import Woodcutting from './Woodcutting'

const Survival: FC = () => {
	return (
		<Box>
			<Title order={1} m='xl'>Survival</Title>

			<SkillCards skill='survival' subskills={{
				main: ChristmasTree,
				woodcutting: Trees,
				firemaking: Flame,
				foraging: Seeding
			}} />

			<Woodcutting />

			<Firemaking />

			<Foraging />
		</Box>
	)
}

export default Survival