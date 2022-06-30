import { ImmutableObject } from 'types/immutable'

interface ArcheologyData {
	name: string;
	image: string;
	xp: number;
	intervalTime: number;
	unlockLevel: number;
}

export const archeologyData: ImmutableObject<Record<string, ArcheologyData>> = {
	vase: {
		name: 'Vase',
		image: 'temp_artefact',
		xp: 100,
		intervalTime: 2000,
		unlockLevel: 1
	},
	goblet: {
		name: 'Goblet',
		image: 'temp_artefact',
		xp: 200,
		intervalTime: 3000,
		unlockLevel: 5
	},
	ancient_utensils: {
		name: 'Ancient Utensils',
		image: 'temp_artefact',
		xp: 300,
		intervalTime: 4000,
		unlockLevel: 10
	},
	ancient_instrument: {
		name: 'Ancient Instrument',
		image: 'temp_artefact',
		xp: 400,
		intervalTime: 5000,
		unlockLevel: 15
	},
	ancient_jewellery: {
		name: 'Ancient Jewellery',
		image: 'temp_artefact',
		xp: 500,
		intervalTime: 6000,
		unlockLevel: 20
	}
}