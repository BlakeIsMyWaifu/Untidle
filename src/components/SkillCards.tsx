import { Group } from '@mantine/core'
import { SkillList, SubskillList, Subskills } from 'data/skills/skills'
import { FC } from 'react'

import SubskillCard from './SubskillCard'

interface SkillCardsProps<T extends SkillList> {
	skill: T;
	subskills: Record<Subskills<T> | 'main', FC>;
}

const SkillCards = <T extends SkillList,>({ skill, subskills }: SkillCardsProps<T>): JSX.Element => {
	return (
		<Group position='center'>
			{
				Object.entries(subskills).map(([subskillName, Icon]) => {
					return <SubskillCard
						key={subskillName}
						skillName={skill}
						subskillName={subskillName as SubskillList}
						Icon={Icon}
					/>
				})
			}
		</Group>
	)
}

export default SkillCards