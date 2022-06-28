import { Group } from '@mantine/core'
import { AllSubskillList, SkillList } from 'data/skills'
import { FC } from 'react'

import SubskillCard from './SubskillCard'

interface SkillCardsProps {
	skill: SkillList;
	subskills: Partial<Record<AllSubskillList, FC>>;
}

const SkillCards: FC<SkillCardsProps> = ({ skill, subskills }) => {
	return (
		<Group position='center'>
			{
				Object.entries(subskills).map(([subskillName, Icon]) => {
					return <SubskillCard
						key={subskillName}
						skillName={skill}
						subskillName={subskillName as AllSubskillList}
						Icon={Icon}
					/>
				})
			}
		</Group>
	)
}

export default SkillCards