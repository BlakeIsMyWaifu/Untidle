import { Box, Button, Group, SimpleGrid, Stack, Table, Text, Title } from '@mantine/core'
import { GuildList } from 'data/buildings/guilds'
import { UniqueList } from 'data/buildings/unique'
import { FC } from 'react'
import { useArchitectureStore } from 'state/useArchitecture'

const ArchitectureSection: FC = () => {

	const { population, unique, upgradeUnique, resetUnique, resetAllUniques, guild, upgradeGuild, resetGuild, resetAllGuilds } = useArchitectureStore()

	const buildingTable = (type: 'unique' | 'guild', buildingList: Record<string, number>): JSX.Element => {
		return <Table highlightOnHover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Level</th>
					<th>Upgrade</th>
					<th>Reset</th>
				</tr>
			</thead>
			<tbody>
				{
					Object.entries(buildingList).map(([buildingName, buildingLevel]) => {
						return <tr key={buildingName}>
							<td>{buildingName}</td>
							<td>{buildingLevel}</td>
							<td><Button
								compact
								size='xs'
								variant='default'
								onClick={() => {
									if (type === 'unique') {
										upgradeUnique(buildingName as UniqueList)
									} else {
										upgradeGuild(buildingName as GuildList)
									}
								}}>Upgrade</Button></td>
							<td><Button
								compact
								size='xs'
								variant='default'
								onClick={() => {
									if (type === 'unique') {
										resetUnique(buildingName as UniqueList)
									} else {
										resetGuild(buildingName as GuildList)
									}
								}}>Reset</Button></td>
						</tr>
					})
				}
			</tbody>
		</Table>
	}

	return (
		<Box>
			<Stack>
				<Title order={3}>Population</Title>
				<Text>Population: {population.unemployed} / {population.max}</Text>
			</Stack>

			<SimpleGrid cols={2} mt='xl'>
				<Box>
					<Group position='apart' align='end'>
						<Title order={3}>Unique</Title>
						<Button
							compact
							variant='default'
							onClick={resetAllUniques}
						>Reset All</Button>
					</Group>
					{buildingTable('unique', unique)}
				</Box>

				<Box>
					<Group position='apart' align='end'>
						<Title order={3}>Guild</Title>
						<Button
							compact
							variant='default'
							onClick={resetAllGuilds}
						>Reset All</Button>
					</Group>
					{buildingTable('guild', guild)}
				</Box>
			</SimpleGrid>
		</Box>
	)
}

export default ArchitectureSection