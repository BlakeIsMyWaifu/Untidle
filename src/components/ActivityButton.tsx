import { Button } from '@mantine/core'
import { FC, useEffect } from 'react'
import { ChangeActivityData, useActivityStore } from 'state/useActivityStore'

interface ActivityButtonProps {
	activity: ChangeActivityData;
	unlocked: boolean;
}

const ActivityButton: FC<ActivityButtonProps> = ({ activity, unlocked }) => {

	const { activityName, changeActivity, stopActivity } = useActivityStore()

	const currentlyActive = activityName === activity?.activityName

	useEffect(() => {
		if (!unlocked) {
			stopActivity()
		}
	}, [stopActivity, unlocked])

	return (
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
	)
}

export default ActivityButton