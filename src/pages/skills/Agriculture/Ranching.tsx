import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { ranchingData } from 'data/skills/agriculture/ranchingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Ranching: FC = () => {

	const ranchingLevel = useSkillStore(state => state.skills.agriculture.ranching.level)

	return (
		<Box>
			<Title order={2} m='md'>Ranching</Title>

			<Grid>
				{
					Object.values(ranchingData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={ranchingLevel >= unlockLevel}
							skill='agriculture'
							subskill='ranching'
							image={image}
							activity={{
								activityName: `ranching-${name}`,
								activitySkill: 'ranching',
								intervalTime,
								reward: {
									addXp: {
										amount: xp,
										skill: 'agriculture',
										subskill: 'ranching'
									},
									addItem: {
										materials: [
											{ name: `${name.toLowerCase()}`, amount: [1, 3] }
										]
									}
								}
							}}
						/>
					})
				}
			</Grid>
		</Box>
	)

}

export default Ranching