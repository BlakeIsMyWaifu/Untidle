import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { archeologyData } from 'data/skills/excavation/archeologyData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Archeology: FC = () => {

	const archeologyLevel = useSkillStore(state => state.skills.excavation.archeology.level)

	return (
		<Box>

			<Title order={2}>Archeology</Title>

			<Grid>
				{
					Object.values(archeologyData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={archeologyLevel >= unlockLevel}
							skill='excavation'
							subskill='archeology'
							image={image}
							activity={{
								activityName: `archeology-${name}`,
								intervalTime,
								reward: {
									addXp: {
										amount: xp,
										skill: 'excavation',
										subskill: 'archeology'
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

export default Archeology