import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { woodcuttingData } from 'data/skills/survival/woodcuttingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Woodcutting: FC = () => {

	const woodcuttingLevel = useSkillStore(state => state.skills.survival.woodcutting.level)

	return (
		<Box>
			<Title order={2} m='md'>Woodcutting</Title>

			<Grid>
				{
					Object.values(woodcuttingData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={woodcuttingLevel >= unlockLevel}
							skill='survival'
							subskill='woodcutting'
							image={image}
							activity={{
								activityName: `woodcutting-${name}`,
								activitySkill: 'woodcutting',
								intervalTime,
								reward: {
									xp: {
										amount: xp,
										skill: 'survival',
										subskill: 'woodcutting'
									},
									item: {
										materials: [
											{ name: `${name.toLowerCase()} wood`, amount: [1, 3] }
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

export default Woodcutting