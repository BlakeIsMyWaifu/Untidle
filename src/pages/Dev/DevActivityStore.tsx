import { Box, Button, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const DevActivityStore: FC = () => {

	const { active, activityName, intervalTime, reward, changeActivity, stopActivity } = useActivityStore()

	return (
		<Box>

			<Group p='md'>
				<Button variant='default' onClick={() => {
					changeActivity({
						activityName: 'Dev 1',
						intervalTime: 1000,
						reward: {
							method: () => console.log('Dev 1'),
							addXp: {
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
						intervalTime: 2000,
						reward: {
							method: () => console.log('Dev 2'),
							addItem: {
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
						<Text>Interval Time:</Text>
						<Text>{intervalTime}ms</Text>
					</Group>
				</Stack>

				<Stack ml='xl'>
					<Group>
						{JSON.stringify(reward)}
					</Group>
				</Stack>
			</Group>

		</Box>
	)
}

export default DevActivityStore