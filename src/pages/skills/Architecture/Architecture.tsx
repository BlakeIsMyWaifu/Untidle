import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Carpentry from './Carpentry'
import Guilds from './Guilds'
import Masonry from './Masonry'

const Architecture: FC = () => {
	return (
		<Box>
			<Title order={2}>Architecture</Title>

			<SkillCards skill='architecture' subskills={{
				main: Hammer,
				masonry: Hammer,
				guilds: Hammer,
				carpentry: Hammer
			}} />

			<Masonry />

			<Guilds />

			<Carpentry />
		</Box>
	)
}

export default Architecture