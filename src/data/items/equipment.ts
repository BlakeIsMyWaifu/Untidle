import { Item } from './items'

export interface Equipment extends Item {
	stats: object;
	category: EquipmentCategory;
}

type EquipmentCategory =
	| 'sword'