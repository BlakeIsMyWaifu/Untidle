import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { FC } from 'react'

const Survivalism: FC = () => {
	return (
		<Box>
			<Title style={{
				color: 'white'
			}}>Survivalism</Title>

			<Grid>
				<Activity name='Oak' unlocked={true} />
				<Activity name='Birch' unlocked={false} />
				<Activity name='Spruce' unlocked={false} />
				<Activity name='Jungle' unlocked={false} />
			</Grid>
		</Box>
	)
}

export default Survivalism