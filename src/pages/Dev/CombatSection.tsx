import { Box, Button, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { useCombatStore } from 'state/useCombatStore'

const CombatSection: FC = () => {

	const combatStore = useCombatStore()

	return (
		<Box>
			<Group p='md'>
				<Button
					variant='default'
					onClick={() => {
						combatStore.healPlayer()
					}}
				>Heal Player</Button>
			</Group>

			<SimpleGrid cols={2}>
				<Stack spacing={0}>
					<Title order={3}>Main</Title>
					<Text>Current Health: {combatStore.currentHealth}</Text>
					<Text>In Combat: {combatStore.inCombat ? 'true' : 'false'}</Text>

					<Title order={3}>Stats</Title>
					{
						Object.entries(combatStore.stats).map(([stat, value]) => {
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