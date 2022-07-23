import { FC, useEffect } from 'react'
import { useActivityStore } from 'state/useActivityStore'

const WildernessActivityLogic: FC = () => {

	const changeActivity = useActivityStore(state => state.changeActivity)
	const stopActivity = useActivityStore(state => state.stopActivity)

	useEffect(() => {
		changeActivity({
			activityName: 'Wilderness',
			activitySkill: 'berserker', // TODO change to whatever skill is being leveled in combat
			intervalTime: null,
			reward: {}
		})
		return () => {
			stopActivity()
		}
	}, [changeActivity, stopActivity])

	return null
}

export default WildernessActivityLogic