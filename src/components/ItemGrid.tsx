import { SimpleGrid, SimpleGridBreakpoint } from '@mantine/core'
import { CollectedEquipment } from 'data/items/equipment'
import { getMaterial } from 'data/items/materials'
import { FC, Fragment } from 'react'

import Item from './Item'

interface ItemGridProps {
	breakpoints: SimpleGridBreakpoint[];
	materials?: Record<string, number>;
	equipments?: Record<string, CollectedEquipment>;
}

const ItemGrid: FC<ItemGridProps> = ({ breakpoints, materials, equipments }) => {
	return (
		<SimpleGrid breakpoints={breakpoints} style={{
			gridAutoRows: 'min-content'
		}}>
			{
				materials && Object.entries(materials).map(([materialName, amount]) => {
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
				equipments && Object.values(equipments).map((equipment, i) => {
					return <Item
						key={i}
						itemType='equipment'
						itemData={equipment}
					/>
				})
			}
		</SimpleGrid>
	)
}

export default ItemGrid