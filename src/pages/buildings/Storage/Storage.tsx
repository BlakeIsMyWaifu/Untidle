import { Box, Title } from '@mantine/core'
import ItemGrid from 'components/ItemGrid'
import { FC } from 'react'
import { useItemStore } from 'state/useItemStore'

const Storage: FC = () => {

	const materials = useItemStore(state => state.materials)
	const equipments = useItemStore(state => state.equipments)

	return (
		<Box>
			<Title order={1} m='xl'>Storage</Title>

			<ItemGrid
				breakpoints={[
					{ minWidth: 'xl', cols: 16 },
					{ minWidth: 'lg', cols: 12 },
					{ minWidth: 'xs', cols: 8 }
				]}
				materials={materials}
				equipments={equipments}
			/>
		</Box>
	)
}

export default Storage