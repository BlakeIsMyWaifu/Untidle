import { Box, createStyles } from '@mantine/core'
import { FC } from 'react'

import Enemy from './Enemy'
import EnemyAttackBar from './EnemyAttackBar'
import EnemyHealth from './EnemyHealth'
import EnemyStats from './EnemyStats'
import Loot from './Loot'
import PlayerAttackBar from './PlayerAttackBar'
import PlayerEquipment from './PlayerEquipment'
import PlayerHealth from './PlayerHealth'
import PlayerStats from './PlayerStats'

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
		gridTemplateRows: '360px 3fr 3fr 1fr',
		gridTemplateAreas: '"PlayerStats" "Devotion" "Slayer" "Summon"',
		gap: theme.spacing.xs
	},
	playerMain: {
		gridArea: 'PlayerMain',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '48px 48px 16fr 3fr',
		gridTemplateAreas: '"PlayerHealth" "PlayerAttack" "Equipment" "Potions"',
		gap: theme.spacing.xs
	},
	enemy: {
		gridArea: 'Enemy',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '48px 48px 12fr 300px',
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
		<Box className={classes.grid}>
			<Box className={classes.playerExtra}>
				<PlayerStats />
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
				<EnemyStats />
			</Box>

			<Loot />
		</Box>
	)
}

export default Fight