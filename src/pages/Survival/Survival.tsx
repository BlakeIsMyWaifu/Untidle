import { Box, Group, Title } from '@mantine/core'
import SkillCard from 'components/SkillCard'
import { FC } from 'react'
import { ChristmasTree, Flame, Seeding, Trees } from 'tabler-icons-react'

import Woodcutting from './Woodcutting'

const Survival: FC = () => {
	return (
		<Box>
			<Title order={1} m='xl'>Survival</Title>

			<Group position='center'>
				<SkillCard
					skillName='survival'
					subskillName='main'
					Icon={ChristmasTree}
				/>
				<SkillCard
					skillName='survival'
					subskillName='woodcutting'
					Icon={Trees}
				/>
				<SkillCard
					skillName='survival'
					subskillName='firemaking'
					Icon={Flame}
				/>
				<SkillCard
					skillName='survival'
					subskillName='foraging'
					Icon={Seeding}
				/>
			</Group>

			<Woodcutting />
		</Box>
	)
}

export default Survival