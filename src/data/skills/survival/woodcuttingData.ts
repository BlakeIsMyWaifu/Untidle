interface WoodcuttingData {
	[key: string]: {
		name: string;
		image: string;
		xp: number;
		intervalTime: number;
		unlockLevel: number;
	};
}

export const woodcuttingData: WoodcuttingData = {
	oak: {
		name: 'Oak',
		image: 'temp_tree',
		xp: 10,
		intervalTime: 1000,
		unlockLevel: 1
	},
	sycamore: {
		name: 'Sycamore',
		image: 'temp_tree',
		xp: 20,
		intervalTime: 1200,
		unlockLevel: 4
	},
	pine: {
		name: 'Pine',
		image: 'temp_tree',
		xp: 30,
		intervalTime: 1400,
		unlockLevel: 8
	},
	fir: {
		name: 'Fir',
		image: 'temp_tree',
		xp: 40,
		intervalTime: 1600,
		unlockLevel: 12
	},
	elm: {
		name: 'Elm',
		image: 'temp_tree',
		xp: 50,
		intervalTime: 1800,
		unlockLevel: 16
	},
	willow: {
		name: 'Willow',
		image: 'temp_tree',
		xp: 60,
		intervalTime: 2000,
		unlockLevel: 20
	},
	magnolia: {
		name: 'Magnolia',
		image: 'temp_tree',
		xp: 70,
		intervalTime: 2200,
		unlockLevel: 24
	},
	birch: {
		name: 'Birch',
		image: 'temp_tree',
		xp: 80,
		intervalTime: 2400,
		unlockLevel: 28
	},
	cedar: {
		name: 'Cedar',
		image: 'temp_tree',
		xp: 90,
		intervalTime: 2600,
		unlockLevel: 32
	}
}