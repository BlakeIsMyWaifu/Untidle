import { Box, Button, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const ActivitySection: FC = () => {

	const { active, activityName, activitySkill, intervalTime, reward, cost, changeActivity, stopActivity } = useActivityStore()

	return (
		<Box>

			<Group p='md'>
				<Button variant='default' onClick={() => {
					changeActivity({
						activityName: 'Dev 1',
						activitySkill: 'chaos',
						intervalTime: 1000,
						reward: {
							method: () => console.log('Dev 1'),
							xp: {
								skill: 'survival',
								subskill: 'woodcutting',
								amount: 1
							}
						}
					})
				}}>Activity 1</Button>

				<Button variant='default' onClick={() => {
					changeActivity({
						activityName: 'Dev 2',
						activitySkill: 'berserker',
						intervalTime: 2000,
						reward: {
							method: () => console.log('Dev 2'),
							item: {
								materials: [
									{ name: 'oak wood', amount: 1 }
								]
							}
						}
					})
				}}>Activity 2</Button>

				<Button variant='default' onClick={() => {
					stopActivity()
				}}>Clear</Button>
			</Group>

			<Group>
				<Stack mr='xl'>
					<Group>
						<Text>Active:</Text>
						<Text>{active ? 'true' : 'false'}</Text>
					</Group>
					<Group>
						<Text>Current Activity:</Text>
						<Text>{activityName ?? 'none'}</Text>
					</Group>
					<Group>
						<Text>Current Activity Skill:</Text>
						<Text>{activitySkill ?? 'none'}</Text>
					</Group>
					<Group>
						<Text>Interval Time:</Text>
						<Text>{intervalTime}ms</Text>
					</Group>
				</Stack>

				<Stack ml='xl'>
					<Group position='apart'>
						<Text style={{
							whiteSpace: 'pre-wrap'
						}}>{JSON.stringify(reward, null, 4)}</Text>
						<Text style={{
							whiteSpace: 'pre-wrap'
						}}>{JSON.stringify(cost, null, 4)}</Text>
					</Group>
				</Stack>
			</Group>

		</Box>
	)
}

export default ActivitySection