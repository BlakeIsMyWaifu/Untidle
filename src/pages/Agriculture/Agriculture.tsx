import { Box, Group, Title }from '@mantine/core'
import SkillCard from 'components/SkillCard'
import { FC } from 'react'
import { Egg, Flower, Growth, Plant2 } from 'tabler-icons-react'

import Farming from './Farming'
import Horticulture from './Horticulture'

const Agriculture: FC = () => {
	return (
		<Box>
			<Title order={1} m='x1'>Agriculture</Title>

			<Group position='center'>
				<SkillCard
					skillName='agriculture'
					subskillName='main'
					Icon={Growth}
				/>
				<SkillCard
					skillName='agriculture'
					subskillName='farming'
					Icon={Plant2}
				/>
				<SkillCard
					skillName='agriculture'
					subskillName='horticulture'
					Icon={Flower}
				/>
				<SkillCard
					skillName='agriculture'
					subskillName='ranching'
					Icon={Egg}
				/>
			</Group>

			<Farming />
			<Horticulture />
		</Box>
	)
}

export default Agriculture