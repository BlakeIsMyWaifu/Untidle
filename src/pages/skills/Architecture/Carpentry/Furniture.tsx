import { Box, Image, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import ActivityButton from 'components/ActivityButton'
import ImageDropdown, { DropdownData } from 'components/ImageDropdown'
import QuantityInput from 'components/QuantityInput'
import { getAllMaterialCategory } from 'data/items/materials'
import { FurnitureData } from 'data/skills/architecture/carpentryData'
import { FC, useMemo, useState } from 'react'
import { useItemStore } from 'state/useItemStore'

interface FurnitureProps {
	data: FurnitureData;
}

const Furniture: FC<FurnitureProps> = ({ data }) => {

	const { name, image, quality, material, intervalTime } = data

	const materials = useItemStore(state => state.materials)

	const materialData: DropdownData[] = useMemo(() => getAllMaterialCategory(material).map(material => ({
		label: material.name,
		image: `assets/items/material/wood/${material.image}.png`
	})), [material])

	const [dropdown, setDropdown] = useState<DropdownData | undefined>(materialData[0]) // TODO remember selected dropdown on page change

	const stock = materials[dropdown?.label ?? ''] ?? 0

	const [quantity, setQuantity] = useState(1) // TODO actually do something

	const updatedName = name.replace(`$${material}`, dropdown?.label ?? '')

	return (
		<Paper>
			<SimpleGrid cols={3} p='sm' style={{
				alignItems: 'center'
			}}>
				<Stack spacing={0} align='center'>
					<Title order={4} style={{
						textTransform: 'capitalize'
					}}>{updatedName}</Title>
					<Image src={`assets/skills/architecture/carpentry/${image}.png`} />
				</Stack>

				<Stack spacing={8}>
					<Text>Material</Text>
					<ImageDropdown
						data={materialData}
						selected={dropdown}
						setFunction={item => setDropdown(item)}
					/>
					<Text>Quality: {quality}</Text>
				</Stack>

				<Stack spacing={8}>
					<Text>Amount</Text>
					<QuantityInput
						min={stock ? 1 : 0}
						max={stock}
						value={quantity}
						setValue={setQuantity}
					/>
					<Text>Stock: {stock}</Text>
				</Stack>
			</SimpleGrid>

			<Box p='sm'>
				<ActivityButton activity={{
					activityName: `carpentry ${name}`,
					activitySkill: 'carpentry',
					intervalTime,
					reward: {
						addXp: {
							amount: 100,
							skill: 'architecture',
							subskill: 'carpentry'
						},
						addItem: {
							materials: [
								{ name: updatedName, amount: 1 }
							]
						}
					},
					cost: {
						materials: [
							{ name: dropdown?.label ?? '', amount: 1 }
						]
					}
				}} unlocked={!!stock} />
			</Box>
		</Paper>
	)
}

export default Furniture