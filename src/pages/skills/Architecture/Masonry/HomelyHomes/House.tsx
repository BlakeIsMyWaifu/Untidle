import { Group, Image, Paper, Stack, Table, Title } from '@mantine/core'
import { useSetState } from '@mantine/hooks'
import ActivityButton from 'components/ActivityButton'
import ImageDropdown, { DropdownData } from 'components/ImageDropdown'
import { FurnitureType } from 'data/skills/architecture/carpentryData'
import { furnitureData } from 'data/skills/architecture/furnitureData'
import { HomelyHome } from 'data/skills/architecture/homelyHomesData'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { useItemStore } from 'state/useItemStore'
import { capitalise } from 'utils/capitalise'
import { typedObject } from 'utils/typedObjectKeys'

interface HouseProps {
	data: HomelyHome;
}

const House: FC<HouseProps> = ({ data }) => {

	const { name, image, furnitureSlots } = data

	const [furnitureDropdown, setFurnitureDropdown] = useSetState<Partial<Record<FurnitureType, DropdownData[]>>>({})
	const [selectedDropdown, setSelectedDropdown] = useSetState<Partial<Record<FurnitureType, DropdownData>>>({})

	const materials = useItemStore(state => state.materials)
	const [stock, setStock] = useSetState<Partial<Record<FurnitureType, number>>>({})

	useMountEffect(() => {
		typedObject.keys(furnitureSlots).forEach(slot => {
			const data: DropdownData[] = furnitureData[slot].map(furniture => ({
				label: capitalise(furniture.name),
				image: `assets/skills/architecture/carpentry/${furniture.image}.png`
			}))
			setFurnitureDropdown({ [slot]: data })
			setSelectedDropdown({ [slot]: data[0] })
		})
	})

	useEffect(() => {
		typedObject.keys(furnitureSlots).forEach(slot => {
			const selectedFurniture = selectedDropdown[slot]?.label
			const stockAmount = materials[selectedFurniture?.toLowerCase() ?? ''] ?? 0
			setStock({ [slot]: stockAmount })
		})
	}, [furnitureSlots, materials, selectedDropdown, setStock])

	return (
		<Paper p='md'>
			<Group noWrap>
				<Stack spacing={0} align='center'>
					<Title order={4}>{capitalise(name)}</Title>
					<Image src={`assets/skills/architecture/homelyHomes/${image}.png`} />
				</Stack>

				<Table>
					<thead>
						<tr>
							<td>Furniture</td>
							<td>Needed</td>
							<td>Stock</td>
							<td>Quality</td>
						</tr>
					</thead>
					<tbody>
						{
							typedObject.entries(furnitureSlots).map(([slot, needed]) => {
								const selectedFurniture = selectedDropdown[slot]?.label
								if (!selectedFurniture) return <></>

								const quality = furnitureData[slot].find(furniture => furniture.name === selectedFurniture.toLowerCase())?.quality

								return <tr key={slot}>
									<td>
										<ImageDropdown
											data={furnitureDropdown[slot] ?? []}
											selected={selectedDropdown[slot]}
											setFunction={item => {
												setSelectedDropdown({ [slot]: item })
											}}
										/>
									</td>
									<td>{needed}</td>
									<td>{stock[slot]}</td>
									<td>{quality}</td>
								</tr>
							})
						}
					</tbody>
				</Table>
			</Group>

			<ActivityButton
				unlocked={typedObject.entries(furnitureSlots).every(([slot, amount]) => (stock[slot] ?? 0) >= amount)}
				activity={{
					activityName: `homelyhomes ${name}`,
					activitySkill: 'masonry',
					intervalTime: 8000,
					reward: {
						addXp: {
							amount: 200, // TODO scale xp/gold from house size and quality
							skill: 'architecture',
							subskill: 'masonry'
						},
						gold: 100
					},
					cost: {
						materials: typedObject.entries(furnitureSlots).map(([slot, amount]) => ({
							name: selectedDropdown[slot]?.label.toLowerCase() ?? '',
							amount
						}))
					}
				}}
			/>
		</Paper>
	)
}

export default House