import { MaterialCategory } from 'data/items/materials'
import { ImmutableObject } from 'types/immutable'

export interface FurnitureData {
	name: string;
	image: string;
	quality: number;
	material: MaterialCategory;
	intervalTime: number;
}

export const carpentryData: ImmutableObject<Record<string, FurnitureData>> = {
	table: {
		name: '$wood table',
		image: 'temp_table',
		quality: 10,
		material: 'wood',
		intervalTime: 8000
	},
	chair: {
		name: '$wood chair',
		image: 'temp_chair',
		quality: 4,
		material: 'wood',
		intervalTime: 5000
	},
	bed: {
		name: '$wood bed',
		image: 'temp_bed',
		quality: 25,
		material: 'wood',
		intervalTime: 15_000
	}
}