import { Box, Button, Group, NumberInput, Text, Title } from '@mantine/core'
import { Equipment as EquipmentType } from 'data/items/equipment'
import { FC, useRef } from 'react'
import { useItemStore } from 'state/useItemStore'

const Equipment: FC = () => {

	const { equipments, addEquipment, removeEquipment, resetEquipment } = useItemStore()

	const removeNumRef = useRef<HTMLInputElement>(null)

	return (
		<Box mt='xl'>

			<Title order={3}>Equipment</Title>

			<Group p='md' align='end'>
				<Button variant='default' onClick={() => {
					const equipment: EquipmentType = {
						name: 'test',
						image: '',
						rarity: 'common',
						category: 'sword',
						stats: {}
					}
					addEquipment(equipment)
				}}>
					Add Test Equipment
				</Button>

				<Button variant='default' onClick={resetEquipment}>Reset Equipment</Button>
			</Group>

			<Group p='md'>
				<NumberInput
					placeholder='id'
					min={1}
					ref={removeNumRef}
				/>

				<Button variant='default' onClick={() => {
					removeEquipment(+(removeNumRef.current?.value ?? 1))
				}}>Remove id</Button>
			</Group>

			<Group>
				<Text style={{
					whiteSpace: 'pre-wrap'
				}}>{JSON.stringify(equipments, null, 4)}</Text>
			</Group>

		</Box>
	)
}

export default Equipment