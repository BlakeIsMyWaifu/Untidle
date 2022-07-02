import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Armchair, BuildingCommunity, BuildingWarehouse, Hammer } from 'tabler-icons-react'

import Carpentry from './Carpentry'
import Guilds from './Guilds'
import Masonry from './Masonry'

const Architecture: FC = () => {
	return (
		<Box>
			<Title order={2}>Architecture</Title>

			<SkillCards skill='architecture' subskills={{
				main: Hammer,
				masonry: BuildingCommunity,
				guilds: BuildingWarehouse,
				carpentry: Armchair
			}} />

			<Masonry />

			<Guilds />

			<Carpentry />
		</Box>
	)
}

export default Architecture