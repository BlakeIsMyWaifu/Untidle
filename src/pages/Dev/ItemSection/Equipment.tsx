import { Box, Button, Group, NumberInput, Text, Title } from '@mantine/core'
import { Equipment as EquipmentType } from 'data/items/equipment'
import { Rarity } from 'data/items/items'
import { FC, useRef } from 'react'
import { useItemStore } from 'state/useItemStore'
import { randomArrayElement } from 'utils/randomElement'

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
						image: 'temp_sword',
						rarity: randomArrayElement<Rarity>(['common', 'rare', 'epic', 'legendary', 'mythic', 'rainbow']),
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