import { Box, SimpleGrid, Title } from '@mantine/core'
import { getMaterial } from 'data/items/materials'
import { FC, Fragment } from 'react'
import { useItemStore } from 'state/useItemStore'

import Item from './Item'

const Storage: FC = () => {

	const materials = useItemStore(state => state.materials)
	const equipments = useItemStore(state => state.equipments)

	return (
		<Box>
			<Title order={1} m='xl'>Storage</Title>

			<SimpleGrid breakpoints={[
				{ minWidth: 'xl', cols: 16 },
				{ minWidth: 'lg', cols: 12 },
				{ minWidth: 'xs', cols: 8 }
			]}>
				{
					Object.entries(materials).map(([materialName, amount]) => {
						if (!amount) return <Fragment key={materialName} />
						const material = getMaterial(materialName)
						return <Item
							key={materialName}
							itemType='material'
							itemData={material}
							amount={amount}
						/>
					})
				}
				{
					Object.values(equipments).map((equipment, i) => {
						return <Item
							key={i}
							itemType='equipment'
							itemData={equipment}
							amount={1}
						/>
					})
				}
			</SimpleGrid>
		</Box>
	)
}

export default Storage