import { Badge, Box, Button, Group, Space, Stack, Table, Text, Title } from '@mantine/core'
import { BuildingsList, buildingsData } from 'data/buildings/building'
import { FC, useCallback } from 'react'
import { useArchitectureStore } from 'state/useArchitectureStore'
import { useGoldStore } from 'state/useGoldStore'
import { useItemStore } from 'state/useItemStore'
import { hasUpgradeCost } from 'utils/hasCost'

const ArchitectureSection: FC = () => {

	const {
		population,
		buildings,
		upgradeBuilding,
		resetBuilding,
		resetAllBuildings
	} = useArchitectureStore()

	const materials = useItemStore(state => state.materials)
	const gold = useGoldStore(state => state.gold)

	const buildingsTable = useCallback((buildingList: Record<BuildingsList, number>): JSX.Element => {
		return <Table highlightOnHover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Level</th>
					<th>Upgrade</th>
					<th>Reset</th>
					<th>Has Cost</th>
				</tr>
			</thead>
			<tbody>
				{
					Object.entries(buildingList).map(([buildingNameString, buildingLevel]) => {
						const buildingName = buildingNameString as BuildingsList
						return <tr key={buildingName}>
							<td>{buildingName}</td>
							<td>{buildingsData[buildingName].buildingType}</td>
							<td>{buildingLevel}</td>
							<td><Button
								compact
								size='xs'
								variant='default'
								onClick={() => {
									upgradeBuilding(buildingName)
								}}>Upgrade</Button></td>
							<td><Button
								compact
								size='xs'
								variant='default'
								onClick={() => {
									resetBuilding(buildingName)
								}}>Reset</Button></td>
							<td><Badge color={hasUpgradeCost(buildingName) ? 'green' : 'red'}>Cost</Badge></td>
						</tr>
					})
				}
			</tbody>
		</Table>
		// This is need to keep materials and gold here
		// If materials and gold aren't here, it won't update the badge for hasUpgradeCost
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [materials, gold, upgradeBuilding, resetBuilding])

	return (
		<Box>
			<Stack>
				<Title order={3}>Population</Title>
				<Text>Population: {population.unemployed} / {population.max}</Text>
			</Stack>

			<Space h='md' />

			<Group position='apart' align='end'>
				<Title order={3}>Buildings</Title>
				<Button
					compact
					variant='default'
					onClick={resetAllBuildings}
				>Reset All</Button>
			</Group>

			{buildingsTable(buildings)}
		</Box>
	)
}

export default ArchitectureSection