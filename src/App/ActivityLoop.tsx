import { useInterval } from '@mantine/hooks'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const ActivityLoop: FC = () => {

	const { runActivity, intervalTime, activityName, active, stopActivity } = useActivityStore()
	const { start, stop } = useInterval(runActivity, intervalTime ?? 0)

	useMountEffect(() => {
		stopActivity()
	})

	useEffect(() => {
		if (active && intervalTime) {
			start()
		}
		return stop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activityName])

	return null
}

export default ActivityLoop