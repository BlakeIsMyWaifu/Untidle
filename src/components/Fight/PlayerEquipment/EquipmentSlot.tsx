import { Box } from '@mantine/core'
import { FC } from 'react'

interface EquipmentSlotProps {
	name: string;
	gridArea: string;
}

const EquipmentSlot: FC<EquipmentSlotProps> = ({ name, gridArea }) => {
	return (
		<Box style={{
			gridArea,
			border: '2px red solid'
		}}>
			{name}
		</Box>
	)
}

export default EquipmentSlot