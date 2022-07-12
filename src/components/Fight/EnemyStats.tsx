import { Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { useFightStore } from 'state/useFightStore'

const EnemyStats: FC = () => {

	const enemyStats = useFightStore(state => state.enemy?.stats)
	if (!enemyStats) return null

	return (
		<Paper p='xs'>
			<Title order={3} m='xs'>Enemy Stats</Title>

			<SimpleGrid cols={2} spacing={0}>
				{
					Object.entries(enemyStats).map(([stat, amount]) => {
						return <Text key={stat}>{stat}: {amount}</Text>
					})
				}
			</SimpleGrid>
		</Paper>
	)
}

export default EnemyStats