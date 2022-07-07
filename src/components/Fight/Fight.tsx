import { Box, createStyles } from '@mantine/core'
import ProgressBar from 'components/ProgressBar'
import { EnemyData } from 'data/combat/enemyData'
import { FC, useReducer } from 'react'

import CombatLoop from './CombatLoop'
import Enemy from './Enemy'
import EnemyHealth from './EnemyHealth'
import { FightContext, fightInitialState, fightReducer } from './FightState'
import PlayerEquipment from './PlayerEquipment'

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

interface FightProps {
	enemy: EnemyData;
}

const Fight: FC<FightProps> = ({ enemy }) => {

	const { classes } = useStyle()

	const [state, dispatch] = useReducer(fightReducer, fightInitialState)

	return (
		<FightContext.Provider value={{ state, dispatch }}>
			<CombatLoop
				enemy={enemy}
			/>

			<Box className={classes.grid}>
				<Box className={classes.playerExtra}>
					<Placeholder area='PlayerStats' />
					<Placeholder area='Devotion' />
					<Placeholder area='Slayer' />
					<Placeholder area='Summon' />
				</Box>

				<Box className={classes.playerMain}>
					<Placeholder area='PlayerHealth' />
					<ProgressBar
						time={state.playerAttackSpeed}
						label={`Player Attack (${state.playerAttackSpeed / 1000}s)`}
					/>
					<PlayerEquipment />
					<Placeholder area='Potions' />
				</Box>

				<Box className={classes.enemy}>
					<EnemyHealth />
					<Placeholder area='EnemyAttack' />
					<Enemy data={enemy} />
					<Placeholder area='EnemyStats' />
				</Box>

				<Placeholder area='Loot' />
			</Box>
		</FightContext.Provider>
	)
}

export default Fight