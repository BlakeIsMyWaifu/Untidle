import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Devotion from './Devotion'
import Stargazing from './Stargazing'

const Astronomy: FC = () => {
	return (
		<Box>
			<Title order={2}>Astronomy</Title>

			<SkillCards skill='astronomy' subskills={{
				main: Hammer,
				stargazing: Hammer,
				devotion: Hammer
			}} />

			<Stargazing />

			<Devotion />
		</Box>
	)
}

export default Astronomy