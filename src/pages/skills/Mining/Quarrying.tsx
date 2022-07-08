import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { quarryingData } from 'data/skills/mining/quarryingData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Quarrying: FC = () => {

	const quarryingLevel = useSkillStore(state => state.skills.mining.quarrying.level)

	return (
		<Box>

			<Title order={2}>Quarrying</Title>

			<Grid>
				{
					Object.values(quarryingData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={quarryingLevel >= unlockLevel}
							skill='mining'
							subskill='quarrying'
							image={image}
							activity={{
								activityName: `quarrying-${name}`,
								activitySkill: 'quarrying',
								intervalTime,
								reward: {
									addXp: {
										amount: xp,
										skill: 'mining',
										subskill: 'quarrying'
									},
									addItem: {
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

export default Quarrying