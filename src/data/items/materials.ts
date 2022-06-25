import { Item } from './items'
import { wood } from './materials/wood'

export interface Material extends Item {
	category: Category;
}

export type MaterialList = keyof typeof materials

type Category =
	| 'wood'

export const materials: Record<string, Material> = {
	...wood
}