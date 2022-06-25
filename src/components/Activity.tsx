import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { AllSubskillList, SkillList } from 'data/skills'
import { FC } from 'react'
import { ChangeActivityData, useActivityStore } from 'state/useActivityStore'

interface ActivityProps {
	name: string;
	unlocked: boolean;
	skill: SkillList;
	subskill: AllSubskillList;
	image: string;
	activity: ChangeActivityData;
}

const Activity: FC<ActivityProps> = ({ name, unlocked, skill, subskill, image, activity }) => {

	const { activityName, changeActivity, stopActivity } = useActivityStore()

	const currentlyActive = activityName === activity?.activityName

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

			<Button
				fullWidth
				variant='light'
				color={currentlyActive ? 'red' : 'green'}
				disabled={!unlocked}
				onClick={() => {
					if (currentlyActive) {
						stopActivity()
					} else {
						changeActivity(activity)
					}
				}}
			>
				{currentlyActive ? 'Stop' : 'Start'} Activity
			</Button>

		</Card>
	)
}

export default Activity