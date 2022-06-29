import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { diggingData } from 'data/skills/excavation/diggingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Digging: FC = () => {

	const diggingLevel = useSkillStore(state => state.excavation.digging.level)

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
								intervalTime,
								reward: {
									addXp: {
										amount: xp,
										skill: 'excavation',
										subskill: 'digging'
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

export default Digging