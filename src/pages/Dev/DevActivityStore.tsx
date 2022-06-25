import { Box, Button, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const DevActivityStore: FC = () => {

	const { active, activityName, intervalTime, changeActivity, stopActivity } = useActivityStore()

	return (
		<Box>

			<Group p='md'>
				<Button variant='default' onClick={() => {
					changeActivity({
						activityName: 'Dev 1',
						intervalTime: 1000,
						method: () => console.log('Dev 1')
					})
				}}>Activity 1</Button>
				<Button variant='default' onClick={() => {
					changeActivity({
						activityName: 'Dev 2',
						intervalTime: 2000,
						method: () => console.log('Dev 2')
					})
				}}>Activity 2</Button>
				<Button variant='default' onClick={() => {
					stopActivity()
				}}>Clear</Button>
			</Group>

			<Stack>
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
		</Box>
	)
}

export default DevActivityStore