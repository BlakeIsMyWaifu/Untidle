import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { horticultureData } from 'data/skills/agriculture/horticultureData'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

const Horticulture: FC = () => {

	const horticultureLevel = useSkillStore(state => state.skills.agriculture.horticulture.level)

	return (
		<Box>
			<Title order={2} m='md'>Horticulture</Title>

			<Grid>
				{
					Object.values(horticultureData).map(({ name, image, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={horticultureLevel >= unlockLevel}
							skill='agriculture'
							subskill='horticulture'
							image={image}
							activity={{
								activityName: `horticulture-${name}`,
								activitySkill: 'horticulture',
								intervalTime,
								reward: {
									addXp: {
										amount: xp,
										skill: 'agriculture',
										subskill: 'horticulture'
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

export default Horticulture