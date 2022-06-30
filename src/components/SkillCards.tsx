import { Group } from '@mantine/core'
import { SkillList, SubskillList, Subskills } from 'data/skills/skills'
import { Icon } from 'tabler-icons-react'

import SubskillCard from './SubskillCard'

interface SkillCardsProps<T extends SkillList> {
	skill: T;
	subskills: Record<Subskills<T> | 'main', Icon>;
}

const SkillCards = <T extends SkillList,>({ skill, subskills }: SkillCardsProps<T>): JSX.Element => {
	return (
		<Group position='center'>
			{
				Object.entries(subskills).map(([subskillName, icon]) => {
					return <SubskillCard
						key={subskillName}
						skillName={skill}
						subskillName={subskillName as SubskillList}
						icon={icon}
					/>
				})
			}
		</Group>
	)
}

export default SkillCards