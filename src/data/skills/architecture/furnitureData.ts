import { getAllMaterialCategory } from 'data/items/materials'
import { ImmutableObject } from 'types/immutable'

import { FurnitureData, FurnitureType, carpentryData } from './carpentryData'

const getFurnitureFromType = (type: FurnitureType): FurnitureData[] => {
	const furnitureList = carpentryData.filter(furniture => furniture.furnitureType === type)

	return furnitureList.map(furniture => {
		const material = getAllMaterialCategory(furniture.material)
		const allFurnitureNames = material.map(mat => furniture.name.replace(`$${mat.category}`, mat.name))

		return allFurnitureNames.map(furnitureName => {
			const newFurniture = { ...furniture }
			newFurniture.name = furnitureName
			return newFurniture
		})
	}).flat()
}

export const furnitureData: ImmutableObject<Record<FurnitureType, FurnitureData[]>> = {
	table: getFurnitureFromType('table'),
	chair: getFurnitureFromType('chair'),
	bed: getFurnitureFromType('bed')
}