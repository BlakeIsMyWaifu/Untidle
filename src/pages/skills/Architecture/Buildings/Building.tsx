import { Button, Group, Image, Paper, Stack, Text, Title } from '@mantine/core'
import { Guild } from 'data/buildings/guilds'
import { Unique } from 'data/buildings/unique'
import { useHasUpgradeCost } from 'hooks/useHasUpgradeCost'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useArchitectureStore } from 'state/useArchitectureStore'
import { useGoldStore } from 'state/useGoldStore'
import { useItemStore } from 'state/useItemStore'
import { capitalise } from 'utils/capitalise'

interface BuildingsProps {
	data: Unique | Guild;
}

const Building: FC<BuildingsProps> = ({ data }) => {

	const { name, image, maxLevel, upgradeCosts, buildingType } = data

	const buildingLevel = useArchitectureStore(state => state.buildings[name])
	const upgradeBuilding = useArchitectureStore(state => state.upgradeBuilding)

	const isMaxLevel = buildingLevel === maxLevel
	const hasUpgradeCost = useHasUpgradeCost(name)
	const upgradeCost = upgradeCosts[buildingLevel + 1] ?? { gold: 0, materials: {} }

	const upgradeType = buildingLevel === 0 ? 'Unlock' : 'Upgrade'

	const gold = useGoldStore(state => state.gold)
	const materials = useItemStore(state => state.materials)

	const showNeeded = (label: string, owned: number, needed: number): JSX.Element => {
		const capOwned = owned > needed ? needed : owned
		return <Text key={label}>{label}: {capOwned} / {needed}</Text>
	}

	return (
		<Paper p='md'>
			<Group noWrap>
				<Stack spacing={0} align='center'>
					<Title order={4}>{capitalise(name)}</Title>
					<Text>Level {buildingLevel} / {maxLevel}</Text>
					<Image src={`assets/skills/architecture/buildings/${image}.png`} />
				</Stack>

				<Stack>
					<Title order={5}>{upgradeType} Cost</Title>
					{
						isMaxLevel
							? <Text>Max Level</Text>
							: <>
								{!!upgradeCost.gold && showNeeded('gold', gold, upgradeCost.gold)}
								{
									Object.entries(upgradeCost.materials).map(([material, amount]) => {
										return showNeeded(material, materials[material] ?? 0, amount)
									})
								}
							</>
					}
				</Stack>
			</Group>

			<Group noWrap spacing='xs'>
				<Button
					fullWidth
					variant='light'
					color='green'
					disabled={isMaxLevel || !hasUpgradeCost}
					onClick={() => upgradeBuilding(name)} // TODO add masonry / guild xp when upgrading building
				>
					{upgradeType} Building
				</Button>

				{
					buildingType === 'unique' && <Button
						fullWidth
						variant='light'
						color='blue'
						component={Link}
						to={`/${name}`}
					>
						Visit Building
					</Button>
				}
			</Group>
		</Paper>
	)
}

export default Building