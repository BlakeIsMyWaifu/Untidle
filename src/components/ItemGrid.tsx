import { SimpleGrid, SimpleGridBreakpoint } from '@mantine/core'
import { CollectedEquipment, EquipmentList, getEquipment } from 'data/items/equipment'
import { ItemType } from 'data/items/items'
import { MaterialList, getMaterial } from 'data/items/materials'
import { FC, Fragment } from 'react'

import Item from './Item'

interface ItemGridProps {
	breakpoints: SimpleGridBreakpoint[];
	materials?: Record<string, number>;
	equipments?: Record<string, CollectedEquipment>;
	loot?: Partial<Record<MaterialList | EquipmentList, [ItemType, number]>>;
}

const ItemGrid: FC<ItemGridProps> = ({ breakpoints, materials, equipments, loot }) => {
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
						itemData={material}
						amount={amount}
					/>
				})
			}
			{
				equipments && Object.values(equipments).map((equipment, i) => {
					return <Item
						key={i}
						itemData={equipment}
					/>
				})
			}
			{
				loot && Object.entries(loot).map(([itemName, info], i) => {
					// Not sure why a partial makes the value possibly undefined here
					if (!info) return null
					const [type, amount] = info
					const item = type === 'material' ? getMaterial(itemName) : getEquipment(itemName)
					return <Item
						key={i}
						itemData={item}
						amount={amount}
					/>
				})
			}
		</SimpleGrid>
	)
}

export default ItemGrid