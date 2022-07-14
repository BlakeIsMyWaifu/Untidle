import { Item } from './items'
import { wood } from './materials/wood'

export interface Material extends Item {
	type: 'material';
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
		image: 'temp_placeholder',
		type: 'material',
		rarity: 'common',
		category: 'system'
	}
}

export const materialList = Object.keys(materialData)

export const getAllMaterialCategory = (category: MaterialCategory): Material[] => {
	return Object.values(materialData).filter(material => material.category === category)
}