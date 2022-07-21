import { Autocomplete, Box, Button, Group, NumberInput, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { EquipmentSlot } from 'data/items/equipment'
import { usePlayerStats } from 'hooks/usePlayerStats'
import { FC, useRef } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useItemStore } from 'state/useItemStore'

const CombatSection: FC = () => {

	const combatStore = useCombatStore()
	const stats = usePlayerStats()
	const equipments = useItemStore(state => state.equipments)

	const slotRef = useRef<HTMLInputElement>(null)
	const idRef = useRef<HTMLInputElement>(null)

	return (
		<Box>
			<Group p='md'>
				<Button
					variant='default'
					onClick={combatStore.healPlayer}
				>Heal Player</Button>
			</Group>

			<Group p='md' align='end'>
				<Autocomplete
					label='Slot'
					placeholder='Slot'
					data={Object.keys(combatStore.equipment)}
					ref={slotRef}
				/>
				<NumberInput
					label='Id'
					placeholder='Id'
					defaultValue={1}
					min={1}
					ref={idRef}
				/>
				<Button
					variant='default'
					onClick={() => {
						if (!slotRef.current?.value) return
						if (!idRef.current?.value) return
						if (!Object.keys(equipments).includes(idRef.current.value)) return
						combatStore.equipEquipment(+idRef.current.value)
					}}
				>
					Equip
				</Button>
				<Button
					variant='default'
					onClick={() => {
						if (!slotRef.current?.value) return
						combatStore.removeEquipment(slotRef.current?.value as EquipmentSlot)
					}}
				>
					Remove
				</Button>
			</Group>

			<SimpleGrid cols={2}>
				<Stack spacing={0}>
					<Title order={3}>Main</Title>
					<Text ml='sm'>Current Health: {combatStore.currentHealth}</Text>
					<Text ml='sm'>In Combat: {combatStore.inCombat ? 'true' : 'false'}</Text>

					<Title order={3}>Stats</Title>
					{
						Object.entries(stats).map(([stat, value]) => {
							return <Text key={stat} ml='sm'>{stat}: {value}</Text>
						})
					}
				</Stack>

				<Stack>
					<Title order={3}>Equipment</Title>
					<Text style={{
						whiteSpace: 'pre-wrap'
					}}>{JSON.stringify(combatStore.equipment, null, 4)}</Text>
				</Stack>
			</SimpleGrid>
		</Box>
	)
}

export default CombatSection