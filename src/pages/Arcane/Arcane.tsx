import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Enchanting from './Enchanting'
import Runecrafting from './Runecrafting'
import Summoning from './Summoning'

const Arcane: FC = () => {
	return (
		<Box>
			<Title order={2}>Arcane</Title>

			<SkillCards skill='arcane' subskills={{
				main: Hammer,
				runecrafting: Hammer,
				summoning: Hammer,
				enchanting: Hammer
			}} />

			<Runecrafting />

			<Summoning />

			<Enchanting />
		</Box>
	)
}

export default Arcane