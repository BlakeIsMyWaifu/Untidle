import { Paper, createStyles } from '@mantine/core'
import { FC } from 'react'

import EquipmentSlot from './EquipmentSlot'

const useStyle = createStyles(theme => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(5, 64px)',
		gridTemplateRows: 'repeat(5, 64px)',
		gap: theme.spacing.xs,
		padding: theme.spacing.xs
	}
}))

const PlayerEquipment: FC = () => {

	const { classes } = useStyle()

	return (
		<Paper className={classes.grid} >

			<EquipmentSlot name='head' gridArea='1 / 3 / 2 /4' />
			<EquipmentSlot name='pauldron' gridArea='2 / 4 / 3 /4' />
			<EquipmentSlot name='chest' gridArea='3 / 3 / 4 / 4' />
			<EquipmentSlot name='pants' gridArea='4 / 3 / 5 / 4' />
			<EquipmentSlot name='bracer' gridArea='3 / 5 / 4 / 6' />
			<EquipmentSlot name='gloves' gridArea='3 / 1 / 4 / 2' />

			<EquipmentSlot name='mainHand' gridArea='4 / 1 / 5 / 2' />
			<EquipmentSlot name='offHand' gridArea=' 4 / 5 / 5 / 6' />
			<EquipmentSlot name='ammo' gridArea='2 / 2 / 3 / 3' />

			<EquipmentSlot name='amulet' gridArea='2 / 3 / 3 /4' />
			<EquipmentSlot name='ringOne' gridArea='5 / 2 / 6 / 3' />
			<EquipmentSlot name='ringTwo' gridArea='5 / 4 / 6 / 5' />

			<EquipmentSlot name='belt' gridArea='5 / 3 / 6 / 4' />

		</Paper>
	)
}

export default PlayerEquipment