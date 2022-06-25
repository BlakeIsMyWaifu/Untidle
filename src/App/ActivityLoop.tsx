import { useInterval } from '@mantine/hooks'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const ActivityLoop: FC = () => {

	const { runActivity, intervalTime, activityName: activity, active, stopActivity } = useActivityStore()
	const interval = useInterval(runActivity, intervalTime)

	useMountEffect(() => {
		stopActivity()
	})

	useEffect(() => {
		if (active) {
			interval.start()
		}
		return () => {
			interval.stop()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activity])

	return null
}

export default ActivityLoop