import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { FC } from 'react'

const Archeology: FC = () => {
	return (
		<Box>

			<Title order={2}>Archeology</Title>

			<Grid>
				{
					Object.values(archeologyData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={farmingLevel >= unlockLevel}
							skill='agriculture'
							subskill='farming'
							image={image}
							activity={{
								activityName: `farming-${name}`,
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