import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Armchair, BuildingCommunity, BuildingWarehouse, Hammer } from 'tabler-icons-react'

import Buildings from './Buildings/Buildings'
import Carpentry from './Carpentry'
import HomelyHomes from './HomelyHomes'

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

			<Buildings />

			<HomelyHomes />

			<Carpentry />
		</Box>
	)
}

export default Architecture