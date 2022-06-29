interface FarmingData {
    [key: string]: {
		name: string;
		image: string;
		xp: number;
		intervalTime: number;
		unlockLevel: number;
    };
}

// * Placeholder data
// TODO: Replace numbers so that the user benefits from moving to the next crop

export const farmingData: FarmingData = {
	wheat: {
		name: 'Wheat',
		image: 'temp_crop',
		xp: 10,
		intervalTime: 1500,
		unlockLevel: 1
	},
	carrots: {
		name: 'Carrots',
		image: 'temp_crop',
		xp: 20,
		intervalTime: 1800,
		unlockLevel: 4
	},
	potatoes: {
		name: 'Potatoes',
		image: 'temp_crop',
		xp: 30,
		intervalTime: 2100,
		unlockLevel: 8
	},
	onions: {
		name: 'Onions',
		image: 'temp_crop',
		xp: 40,
		intervalTime: 2400,
		unlockLevel: 12
	},
	tomatoes: {
		name: 'Tomatoes',
		image: 'temp_crop',
		xp: 50,
		intervalTime: 2700,
		unlockLevel: 16
	},
	garlic: {
		name: 'Garlic',
		image: 'temp_crop',
		xp: 60,
		intervalTime: 3000,
		unlockLevel: 20
	},
	cucumber: {
		name: 'Cucumber',
		image: 'temp_crop',
		xp: 70,
		intervalTime: 3300,
		unlockLevel: 24
	},
	corn: {
		name: 'Corn',
		image: 'temp_crop',
		xp: 80,
		intervalTime: 3600,
		unlockLevel: 28
	},
	beets: {
		name: 'Beets',
		image: 'temp_crop',
		xp: 90,
		intervalTime: 3900,
		unlockLevel: 32
	},
	beans: {
		name: 'Beans',
		image: 'temp_crop',
		xp: 100,
		intervalTime: 4200,
		unlockLevel: 36
	},
	sugarcane: {
		name: 'Sugarcane',
		image: 'temp_crop',
		xp: 110,
		intervalTime: 4500,
		unlockLevel: 40
	},
	rice: {
		name: 'Rice',
		image: 'temp_crop',
		xp: 120,
		intervalTime: 4800,
		unlockLevel: 44
	},
	rhubarb: {
		name: 'Rhubarb',
		image: 'temp_crop',
		xp: 130,
		intervalTime: 5100,
		unlockLevel: 48
	},
	lettuce: {
		name: 'Lettuce',
		image: 'temp_crop',
		xp: 140,
		intervalTime: 5400,
		unlockLevel: 52
	},
	watermelon: {
		name: 'Watermelon',
		image: 'temp_crop',
		xp: 150,
		intervalTime: 5700,
		unlockLevel: 56
	},
	pumpkin: {
		name: 'Pumpkin',
		image: 'temp_crop',
		xp: 160,
		intervalTime: 6000,
		unlockLevel: 60
	}
}