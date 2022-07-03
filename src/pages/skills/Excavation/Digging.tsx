import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { diggingData } from 'data/skills/excavation/diggingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Digging: FC = () => {

	const diggingLevel = useSkillStore(state => state.skills.excavation.digging.level)

	return (
		<Box>
			<Title order={2}>Digging</Title>

			<Grid>
				{
					Object.values(diggingData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={diggingLevel >= unlockLevel}
							skill='excavation'
							subskill='digging'
							image={image}
							activity={{
								activityName: `digging-${name}`,
								activitySkill: 'digging',
								intervalTime,
								reward: {
									xp: {
										amount: xp,
										skill: 'excavation',
										subskill: 'digging'
									},
									item: {
										materials: [
											{ name: `${name.toLowerCase()}`, amount: [1, 3] },
											{ name: 'shard', amount: 1, chance: 25 }
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

export default Digging