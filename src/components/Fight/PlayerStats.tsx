import { Paper, ScrollArea, Stack, Text, Title } from '@mantine/core'
import { usePlayerStats } from 'hooks/usePlayerStats'
import { FC } from 'react'

const PlayerStats: FC = () => {

	const playerStats = usePlayerStats()

	return (
		<ScrollArea type='always' style={{
			height: 360
		}}>
			<Paper>
				<Stack spacing={0} p='xs'>
					<Title order={3} m='xs'>Player Stats</Title>
					{
						Object.entries(playerStats).map(([stat, amount]) => {
							return <Text key={stat}>{stat}: {amount}</Text>
						})
					}
				</Stack>
			</Paper>
		</ScrollArea>
	)
}

export default PlayerStats