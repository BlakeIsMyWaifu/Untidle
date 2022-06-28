import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Egg, Flower, Growth, Plant2 } from 'tabler-icons-react'

import Farming from './Farming'
import Horticulture from './Horticulture'
import Ranching from './Ranching'

const Agriculture: FC = () => {
	return (
		<Box>
			<Title order={1} m='x1'>Agriculture</Title>

			<SkillCards skill='agriculture' subskills={{
				main: Growth,
				farming: Plant2,
				horticulture: Flower,
				ranching: Egg
			}} />

			<Farming />

			<Horticulture />

			<Ranching />
		</Box>
	)
}

export default Agriculture