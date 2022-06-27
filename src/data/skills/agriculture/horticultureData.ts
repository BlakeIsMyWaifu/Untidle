interface HorticultureData {
    [key: string]: {
        name: string;
		image: string;
        xp: number;
        intervalTime: number;
        unlockLevel: number;
    };
}

export const horticultureData: HorticultureData = {
	cilantro: {
		name: 'Cilantro',
		image: 'temp_herb',
		xp: 10,
		intervalTime: 1200,
		unlockLevel: 1
	},
	mint: {
		name: 'Mint',
		image: 'temp_herb',
		xp: 20,
		intervalTime: 1400,
		unlockLevel: 4
	},
	parsley: {
		name: 'Parsley',
		image: 'temp_herb',
		xp: 30,
		intervalTime: 1600,
		unlockLevel: 8
	},
	basil: {
		name: 'Basil',
		image: 'temp_herb',
		xp: 40,
		intervalTime: 1800,
		unlockLevel: 12
	},
	oregano: {
		name: 'Oregano',
		image: 'temp_herb',
		xp: 50,
		intervalTime: 2100,
		unlockLevel: 16
	},
	rosemary: {
		name: 'Rosemary',
		image: 'temp_herb',
		xp: 60,
		intervalTime: 2400,
		unlockLevel: 20
	},
	angelonia: {
		name: 'Angelonia',
		image: 'temp_herb',
		xp: 70,
		intervalTime: 2700,
		unlockLevel: 24
	},
	caladium: {
		name: 'Caladium',
		image: 'temp_flower',
		xp: 80,
		intervalTime: 3000,
		unlockLevel: 28
	},
	chrysanthemum: {
		name: 'Chrysanthemum',
		image: 'temp_flower',
		xp: 90,
		intervalTime: 3300,
		unlockLevel: 32
	},
	crocus: {
		name: 'Crocus',
		image: 'temp_flower',
		xp: 100,
		intervalTime: 3600,
		unlockLevel: 36
	},
	apple: {
		name: 'Apple',
		image: 'temp_fruit',
		xp: 110,
		intervalTime: 3900,
		unlockLevel: 40
	},
	pear: {
		name: 'Pear',
		image: 'temp_fruit',
		xp: 120,
		intervalTime: 4200,
		unlockLevel: 44
	},
	orange: {
		name: 'Orange',
		image: 'temp_fruit',
		xp: 130,
		intervalTime: 4500,
		unlockLevel: 48
	},
	lemon: {
		name: 'Lemon',
		image: 'temp_fruit',
		xp: 140,
		intervalTime: 4800,
		unlockLevel: 52
	},
	pineapple: {
		name: 'Pineapple',
		image: 'temp_fruit',
		xp: 150,
		intervalTime: 5100,
		unlockLevel: 56
	}
}