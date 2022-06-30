import { Badge, Card, Group, Image, Text } from '@mantine/core'
import { SkillList, SubskillList } from 'data/skills/skills'
import { FC } from 'react'
import { ChangeActivityData } from 'state/useActivityStore'

import ActivityButton from './ActivityButton'

interface ActivityProps {
	name: string;
	unlocked: boolean;
	skill: SkillList;
	subskill: SubskillList;
	image: string;
	activity: ChangeActivityData;
}

const Activity: FC<ActivityProps> = ({ name, unlocked, skill, subskill, image, activity }) => {
	return (
		<Card
			shadow='sm'
			p='lg'
			m='lg'
			sx={{
				width: '15%'
			}}>

			<Image
				src={`assets/skills/${skill}/${subskill}/${image}.png`}
				alt={name}
				width={170}
			/>

			<Group position='apart' m='sm'>
				<Text>{name}</Text>
				<Badge color={unlocked ? 'green' : 'pink'}>
					{unlocked ? 'Unlocked' : 'Locked'}
				</Badge>
			</Group>

			<ActivityButton activity={activity} unlocked={unlocked} />

		</Card>
	)
}

export default Activity