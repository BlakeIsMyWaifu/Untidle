import { MaterialList } from 'data/items/materials'

export interface Buildings<Name extends string = string> {
	name: Name;
	startingLevel: number;
	maxLevel: number;
	upgradeCost: Record<number, UpgradeCost>;
}

interface UpgradeCost {
	gold: number;
	materials: Record<MaterialList, number>;
}