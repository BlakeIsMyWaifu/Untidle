import { ScrollArea, Stack, Text, Title } from '@mantine/core'
import { usePlayerStats } from 'hooks/usePlayerStats'
import { FC } from 'react'

const PlayerStats: FC = () => {

	const playerStats = usePlayerStats()

	return (
		<ScrollArea type='always' style={{
			height: 360
		}}>
			<Stack spacing={0} style={{
				gridArea: 'PlayerStats'
			}}>
				<Title order={3} mb='xs'>Player Stats</Title>
				{
					Object.entries(playerStats).map(([stat, amount]) => {
						return <Text key={stat}>{stat}: {amount}</Text>
					})
				}
			</Stack>
		</ScrollArea>
	)
}

export default PlayerStats