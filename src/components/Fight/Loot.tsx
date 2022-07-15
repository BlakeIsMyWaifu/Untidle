import { Button, Group, Paper, Title } from '@mantine/core'
import ItemGrid from 'components/ItemGrid'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'

const Loot: FC = () => {

	const loot = useCombatStore(state => state.loot)
	const collectLoot = useCombatStore(state => state.collectLoot)

	return (
		<Paper p='xs'>
			<Group position='apart'>
				<Title order={3} p='xs'>Loot</Title>
				<Button
					compact
					variant='default'
					size='md'
					onClick={collectLoot}
				>
					Collect All
				</Button>
			</Group>

			<ItemGrid
				breakpoints={[
					{ minWidth: 'xl', cols: 3 },
					{ minWidth: 'lg', cols: 2 },
					{ minWidth: 'xs', cols: 1 }
				]}
				loot={loot}
			/>
		</Paper>
	)
}

export default Loot