import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { farmingData } from 'data/skills/agriculture/farmingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Farming: FC = () => {

	const farmingLevel = useSkillStore(state => state.skills.agriculture.farming.level)

	return (
		<Box>
			<Title order={2} m='md'>Farming</Title>

			<Grid>
				{
					Object.values(farmingData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={farmingLevel >= unlockLevel}
							skill='agriculture'
							subskill='farming'
							image={image}
							activity={{
								activityName: `farming-${name}`,
								activitySkill: 'farming',
								intervalTime,
								reward: {
									xp: {
										amount: xp,
										skill: 'agriculture',
										subskill: 'farming'
									},
									item: {
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

export default Farming