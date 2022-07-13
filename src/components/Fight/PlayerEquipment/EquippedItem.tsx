import { Box } from '@mantine/core'
import Item from 'components/Item'
import { EquipmentSlot } from 'data/items/equipment'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useItemStore } from 'state/useItemStore'

interface EquipmentSlotProps {
	slot: EquipmentSlot;
	gridArea: string;
}

const EquippedItem: FC<EquipmentSlotProps> = ({ slot, gridArea }) => {

	const equipments = useItemStore(state => state.equipments)
	const equipped = useCombatStore(state => state.equipment[slot])

	return (
		<Box style={{
			gridArea,
			aspectRatio: '1 / 1'
		}}>
			{
				equipped && equipments[equipped]
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					? <Item itemType='equipment' itemData={equipments[equipped]!} />
					: <Item itemType='equipment' itemData={{
						name: 'None',
						image: '',
						rarity: 'common',
						category: slot,
						fixedStats: {}
					}} />
			}
		</Box>
	)
}

export default EquippedItem