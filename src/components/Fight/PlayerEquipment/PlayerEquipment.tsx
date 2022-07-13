import { Container, Paper, Title, createStyles } from '@mantine/core'
import { FC } from 'react'

import EquippedItem from './EquippedItem'

const useStyle = createStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(5, 1fr)',
		gridTemplateRows: 'repeat(5, 1fr)',
		gridAutoRows: 'min-content',
		gridAutoColumns: 'min-content',
		gap: theme.spacing.xs,
		padding: theme.spacing.xs,
		width: '100%'
	},
	title: {
		gridArea: '1 / 1 / 1 / 3'
	}
}))

const PlayerEquipment: FC = () => {

	const { classes } = useStyle()

	return (
		<Paper className={classes.paper}>
			<Container className={classes.grid}>

				<Title className={classes.title} order={3}>Equipment</Title>

				<EquippedItem slot='helmet' gridArea='1 / 3 / 2 /4' />
				<EquippedItem slot='pauldron' gridArea='2 / 4 / 3 /4' />
				<EquippedItem slot='chest' gridArea='3 / 3 / 4 / 4' />
				<EquippedItem slot='pants' gridArea='4 / 3 / 5 / 4' />
				<EquippedItem slot='bracer' gridArea='3 / 5 / 4 / 6' />
				<EquippedItem slot='gloves' gridArea='3 / 1 / 4 / 2' />

				<EquippedItem slot='mainHand' gridArea='4 / 1 / 5 / 2' />
				<EquippedItem slot='offHand' gridArea=' 4 / 5 / 5 / 6' />
				<EquippedItem slot='ammo' gridArea='2 / 2 / 3 / 3' />

				<EquippedItem slot='amulet' gridArea='2 / 3 / 3 /4' />
				<EquippedItem slot='ring' gridArea='5 / 2 / 6 / 3' />
				<EquippedItem slot='ring' gridArea='5 / 4 / 6 / 5' />

				<EquippedItem slot='belt' gridArea='5 / 3 / 6 / 4' />

			</Container>
		</Paper>
	)
}

export default PlayerEquipment