import { Autocomplete, Box, Button, Group, NumberInput, Text, Title } from '@mantine/core'
import { materialList } from 'data/items/materials'
import { FC, useRef } from 'react'
import { useItemStore } from 'state/useItemStore'

const Materials: FC = () => {

	const { addMaterial, removeMaterial, resetMaterials, materials } = useItemStore()

	const itemRef = useRef<HTMLInputElement>(null)
	const amountRef = useRef<HTMLInputElement>(null)

	return (
		<Box>

			<Title order={3}>Materials</Title>

			<Group p='md' align='end'>
				<Autocomplete
					label='Material'
					placeholder='Material'
					data={materialList}
					ref={itemRef}
				/>

				<NumberInput
					label='Amount'
					placeholder='Amount'
					defaultValue={1}
					ref={amountRef}
				/>

				<Button variant='default' onClick={() => {
					addMaterial(itemRef.current?.value ?? '', +(amountRef.current?.value ?? 1))
				}}>Add Item</Button>

				<Button variant='default' onClick={() => {
					removeMaterial(itemRef.current?.value ?? '', +(amountRef.current?.value ?? 1))
				}}>Remove Item</Button>

				<Button variant='default' onClick={resetMaterials}>Reset Materials</Button>
			</Group>

			<Group>
				<Text style={{
					whiteSpace: 'pre-wrap'
				}}>{JSON.stringify(materials, null, 4)}</Text>
			</Group>

		</Box>
	)
}

export default Materials