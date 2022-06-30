import { Box, Button, Group, NumberInput, Text } from '@mantine/core'
import { FC, useRef } from 'react'
import { useGoldStore } from 'state/useGoldStore'

const GoldSection: FC = () => {

	const { gold, addGold, removeGold, resetGold } = useGoldStore()

	const amountRef = useRef<HTMLInputElement>(null)

	return (
		<Box>
			<Group p='md' align='end'>
				<NumberInput
					ref={amountRef}
					label='Amount'
					placeholder='Amount'
					defaultValue={1000}
					min={0}
					step={100}
				/>
				<Button
					variant='default'
					onClick={() => {
						addGold(+(amountRef.current?.value ?? 0))
					}}
				>Add Gold</Button>
				<Button
					variant='default'
					onClick={() => {
						removeGold(+(amountRef.current?.value ?? 0))
					}}
				>Remove Gold</Button>
				<Button
					variant='default'
					onClick={() => {
						resetGold()
					}}
				>Reset Gold</Button>
			</Group>

			<Group>
				<Text>Gold: {gold}</Text>
			</Group>
		</Box>
	)
}

export default GoldSection