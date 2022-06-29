interface DiggingData {
	name: string;
	image: string;
	xp: number;
	intervalTime: number;
	unlockLevel: number;
}

export const diggingData: Record<string, DiggingData> = {
	dirt: {
		name: 'Dirt',
		image: 'temp_diggable',
		xp: 10,
		intervalTime: 1500,
		unlockLevel: 1
	},
	gravel: {
		name: 'Gravel',
		image: 'temp_diggable',
		xp: 20,
		intervalTime: 2000,
		unlockLevel: 5
	},
	desert_sand: {
		name: 'Desert Sand',
		image: 'temp_diggable',
		xp: 30,
		intervalTime: 2500,
		unlockLevel: 10
	},
	beach_sand: {
		name: 'Beach Sand',
		image: 'temp_diggable',
		xp: 40,
		intervalTime: 3000,
		unlockLevel: 15
	},
	clay: {
		name: 'Clay',
		image: 'temp_diggable',
		xp: 50,
		intervalTime: 3500,
		unlockLevel: 20
	}
}