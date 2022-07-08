import { Box, createStyles } from '@mantine/core'
import { FC } from 'react'

import CombatLoop from './CombatLoop'
import Enemy from './Enemy'
import EnemyAttackBar from './EnemyAttackBar'
import EnemyHealth from './EnemyHealth'
import PlayerAttackBar from './PlayerAttackBar'
import PlayerEquipment from './PlayerEquipment'
import PlayerHealth from './PlayerHealth'

const useStyle = createStyles(theme => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 2fr 2fr 1fr',
		gridTemplateRows: '1fr',
		gridTemplateAreas: '"PlayerExtra PlayerMain Enemy Loot"',
		gap: theme.spacing.xs,
		padding: theme.spacing.xs,
		height: '80vh'
	},
	playerExtra: {
		gridArea: 'PlayerExtra',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '5fr 3fr 3fr 1fr',
		gridTemplateAreas: '"PlayerStats" "Devotion" "Slayer" "Summon"',
		gap: theme.spacing.xs
	},
	playerMain: {
		gridArea: 'PlayerMain',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '2fr 2fr 16fr 3fr',
		gridTemplateAreas: '"PlayerHealth" "PlayerAttack" "Equipment" "Potions"',
		gap: theme.spacing.xs
	},
	enemy: {
		gridArea: 'Enemy',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '2fr 2fr 13fr 6fr',
		gridTemplateAreas: '"EnemyHealth" "EnemyAttack" "Enemy" "EnemyStats"',
		gap: theme.spacing.xs
	}
}))

interface PlaceholderProps {
	area: string;
}

const Placeholder: FC<PlaceholderProps> = ({ area }) => {
	return <Box style={{
		gridArea: area,
		border: '2px red solid'
	}}>{area}</Box>
}

const Fight: FC = () => {

	const { classes } = useStyle()

	return (
		<>
			<CombatLoop />

			<Box className={classes.grid}>
				<Box className={classes.playerExtra}>
					<Placeholder area='PlayerStats' />
					<Placeholder area='Devotion' />
					<Placeholder area='Slayer' />
					<Placeholder area='Summon' />
				</Box>

				<Box className={classes.playerMain}>
					<PlayerHealth />
					<PlayerAttackBar />
					<PlayerEquipment />
					<Placeholder area='Potions' />
				</Box>

				<Box className={classes.enemy}>
					<EnemyHealth />
					<EnemyAttackBar />
					<Enemy />
					<Placeholder area='EnemyStats' />
				</Box>

				<Placeholder area='Loot' />
			</Box>

		</>
	)
}

export default Fight