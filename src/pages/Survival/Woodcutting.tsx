import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { FC } from 'react'
import { useSkillStore } from 'state/useSkillStore'

interface WoodcuttingData {
	[key: string]: {
		name: string;
		xp: number;
		intervalTime: number;
		unlockLevel: number;
	};
}

const Woodcutting: FC = () => {

	const woodcuttingLevel = useSkillStore(state => state.survival.woodcutting.level)

	const woodcuttingData: WoodcuttingData = {
		oak: {
			name: 'Oak',
			xp: 10,
			intervalTime: 1000,
			unlockLevel: 1
		},
		sycamore: {
			name: 'Sycamore',
			xp: 20,
			intervalTime: 1200,
			unlockLevel: 4
		},
		pine: {
			name: 'Pine',
			xp: 30,
			intervalTime: 1400,
			unlockLevel: 8
		},
		fir: {
			name: 'Fir',
			xp: 40,
			intervalTime: 1600,
			unlockLevel: 12
		},
		elm: {
			name: 'Elm',
			xp: 50,
			intervalTime: 1800,
			unlockLevel: 16
		},
		willow: {
			name: 'Willow',
			xp: 60,
			intervalTime: 2000,
			unlockLevel: 20
		},
		magnolia: {
			name: 'Magnolia',
			xp: 70,
			intervalTime: 2200,
			unlockLevel: 24
		},
		birch: {
			name: 'Birch',
			xp: 80,
			intervalTime: 2400,
			unlockLevel: 28
		},
		cedar: {
			name: 'Cedar',
			xp: 90,
			intervalTime: 2600,
			unlockLevel: 32
		}
	}

	return (
		<Box>
			<Title order={2} m='md'>Woodcutting</Title>

			<Grid>
				{
					Object.values(woodcuttingData).map(({ name, xp, intervalTime, unlockLevel }) => {
						return <Activity
							key={name}
							name={name}
							unlocked={woodcuttingLevel >= unlockLevel}
							activity={{
								activityName: `woodcutting-${name}`,
								intervalTime,
								addXp: {
									amount: xp,
									skill: 'survival',
									subskill: 'woodcutting'
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