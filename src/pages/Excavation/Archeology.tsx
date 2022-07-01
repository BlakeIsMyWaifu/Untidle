import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { archeologyData } from 'data/skills/excavation/archeologyData'
import { FC } from 'react'
import { useItemStore } from 'state/useItemStore'
import { useSkillStore } from 'state/useSkillStore'

const Archeology: FC = () => {

	const archeologyLevel = useSkillStore(state => state.skills.excavation.archeology.level)

	const materials = useItemStore(state => state.materials)

	const shards = materials.shard ?? 0

	return (
		<Box>
			<Title order={2}>Archeology</Title>

			<Title order={4} p='md'>Shard Stock: {shards}</Title>

			<Grid>
				{
					Object.values(archeologyData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={archeologyLevel >= unlockLevel && !!shards }
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
								},
								cost: {
									materials: [{
										name: 'shard',
										amount: 1
									}]
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