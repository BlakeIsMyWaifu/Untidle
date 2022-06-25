import { Autocomplete, Box, Button, Group, NumberInput, Text } from '@mantine/core'
import { materials } from 'data/items/materials'
import { FC, useRef } from 'react'
import { useItemStore } from 'state/useItemStore'

const DevItemStore: FC = () => {

	const itemStore = useItemStore()

	const itemRef = useRef<HTMLInputElement>(null)
	const amountRef = useRef<HTMLInputElement>(null)

	return (
		<Box>

			<Group p='md' align='end'>

				<Autocomplete
					label='Item'
					placeholder='Item'
					data={Object.keys(materials)}
					ref={itemRef}
				/>

				<NumberInput
					label='Amount'
					placeholder='Amount'
					defaultValue={1}
					ref={amountRef}
				/>

				<Button variant='default' onClick={() => {
					itemStore.addMaterials(itemRef.current?.value ?? '', +(amountRef.current?.value ?? 1))
				}}>Add Item</Button>

				<Button variant='default' onClick={() => {
					itemStore.removeMaterial(itemRef.current?.value ?? '', +(amountRef.current?.value ?? 1))
				}}>Reset Item</Button>

				<Button variant='default' onClick={() => {
					itemStore.reset()
				}}>Reset</Button>

			</Group>

			<Group>
				<Text>{JSON.stringify(itemStore.materials)}</Text>
			</Group>

		</Box>
	)
}

export default DevItemStore