import { Box, Menu } from '@mantine/core'
import Item from 'components/Item'
import { EquipmentSlot } from 'data/items/equipment'
import { useSlotEquipment } from 'hooks/useSlotEquipment'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useItemStore } from 'state/useItemStore'
import { capitalise } from 'utils/capitalise'

interface EquipmentSlotProps {
	slot: EquipmentSlot;
	gridArea: string;
}

const EquippedItem: FC<EquipmentSlotProps> = ({ slot, gridArea }) => {

	const equipments = useItemStore(state => state.equipments)
	const equipped = useCombatStore(state => state.equipment[slot])

	const equipment = useSlotEquipment(slot)

	const equipEquipment = useCombatStore(state => state.equipEquipment)
	const removeEquipment = useCombatStore(state => state.removeEquipment)

	return (
		<Box style={{
			gridArea,
			aspectRatio: '1 / 1'
		}}>
			<Menu
				transition='fade'
				transitionDuration={200}
			>
				<Menu.Target>
					{
						equipped && equipments[equipped]
							? <Item
								// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
								itemData={equipments[equipped]!}
							/>
							: <Item
								itemData={{
									name: 'None',
									image: '',
									type: 'equipment',
									rarity: 'common',
									category: slot,
									baseStats: {}
								}}
								imageOverride={`combat/equipmentSlot/${slot}`}
							/>
					}
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label>{capitalise(slot)}</Menu.Label>
					{
						equipment.map((item, i) => {
							return <Menu.Item key={i} onClick={() => {
								equipEquipment(item.id)
							}}>{item.name}</Menu.Item>
						})
					}
					<Menu.Item color='red' onClick={() => {
						removeEquipment(slot)
					}}>Remove</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Box>
	)
}

export default EquippedItem