import { Item } from './items'
import { wood } from './materials/wood'

export interface Material extends Item {
	category: MaterialCategory;
}

export type MaterialList = keyof typeof materialData

export type MaterialCategory =
	| 'system'
	| 'wood'

const materialData: Record<string, Material> = {
	...wood
}

export const getMaterial = (materialName: string): Material => {
	const material = materialData[materialName]
	if (!material) console.error(`Cannot find material ${materialName}`)
	return material ?? {
		name: 'Error - Unknown Material Name',
		category: 'system',
		image: 'temp_placeholder',
		rarity: 'common'
	}
}

export const materialList = Object.keys(materialData)

export const getAllMaterialCategory = (category: MaterialCategory): Material[] => {
	return Object.values(materialData).filter(material => material.category === category)
}