import { Button, Group, Paper, Title } from '@mantine/core'
import ItemGrid from 'components/ItemGrid'
import { FC } from 'react'
import { useItemStore } from 'state/useItemStore'

const Loot: FC = () => {

	const materials = useItemStore(state => state.materials)
	const equipments = useItemStore(state => state.equipments)

	return (
		<Paper p='xs'>
			<Group position='apart'>
				<Title order={3} p='xs'>Loot</Title>
				<Button
					compact
					variant='default'
					size='md'
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
				materials={materials}
				equipments={equipments}
			/>
		</Paper>
	)
}

export default Loot