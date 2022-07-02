import { MaterialList } from 'data/items/materials'

import { FurnitureType } from './carpentryData'

export interface HomelyHome {
	name: string;
	image: string;
	cost: Record<MaterialList, number>;
	furnitureSlots: Partial<Record<FurnitureType, number>>;
	reward: null; // TODO give a reward base on quality of the house
}

export const homelyHomesData: HomelyHome[] = [
	{
		name: 'One',
		image: 'temp_house',
		cost: {},
		furnitureSlots: {
			table: 1,
			chair: 1
		},
		reward: null
	},
	{
		name: 'Two',
		image: 'temp_house',
		cost: {},
		furnitureSlots: {
			table: 1,
			chair: 2
		},
		reward: null
	},
	{
		name: 'Three',
		image: 'temp_house',
		cost: {},
		furnitureSlots: {
			table: 1,
			chair: 2,
			bed: 1
		},
		reward: null
	},
	{
		name: 'Four',
		image: 'temp_house',
		cost: {},
		furnitureSlots: {
			table: 1,
			chair: 4,
			bed: 2
		},
		reward: null
	},
	{
		name: 'Five',
		image: 'temp_house',
		cost: {},
		furnitureSlots: {
			table: 2,
			chair: 6,
			bed: 4
		},
		reward: null
	}
]