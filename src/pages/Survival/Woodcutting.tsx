import { Box, Grid, Title } from '@mantine/core'
import Activity from 'components/Activity'
import { FC } from 'react'

const Woodcutting: FC = () => {
	return (
		<Box>
			<Title order={2} m='md'>Woodcutting</Title>

			<Grid>
				<Activity name='Oak' unlocked={true} />
				<Activity name='Sycamore' unlocked={false} />
				<Activity name='Pine' unlocked={false} />
				<Activity name='Fir' unlocked={false} />
				<Activity name='Elm' unlocked={false} />
				<Activity name='Willow' unlocked={false} />
				<Activity name='Magnolia' unlocked={false} />
				<Activity name='Birch' unlocked={false} />
				<Activity name='Cedar' unlocked={false} />
			</Grid>
		</Box>
	)
}

export default Woodcutting