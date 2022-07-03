import { MaterialCategory } from 'data/items/materials'
import { ImmutableArray } from 'types/immutable'

export interface FurnitureData {
	name: string;
	furnitureType: FurnitureType;
	image: string;
	quality: number;
	material: MaterialCategory;
	intervalTime: number;
}

export type FurnitureType =
	| 'table'
	| 'chair'
	| 'bed'

export const carpentryData: ImmutableArray<FurnitureData> = [
	{
		name: '$wood table',
		furnitureType: 'table',
		image: 'temp_table',
		quality: 10,
		material: 'wood',
		intervalTime: 8000
	},
	{
		name: '$wood chair',
		furnitureType: 'chair',
		image: 'temp_chair',
		quality: 4,
		material: 'wood',
		intervalTime: 5000
	},
	{
		name: '$wood bed',
		furnitureType: 'bed',
		image: 'temp_bed',
		quality: 25,
		material: 'wood',
		intervalTime: 15_000
	}
]