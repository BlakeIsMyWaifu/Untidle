interface RanchingData {
    [key: string]: {
        name: string;
		image: string;
        xp: number;
        intervalTime: number;
        unlockLevel: number;
    };
}

export const ranchingData: RanchingData = {
	rabbit: {
		name: 'Rabbit',
		image: 'temp_animal',
		xp: 10,
		intervalTime: 1000,
		unlockLevel: 1
	},
	chicken: {
		name: 'Chicken',
		image: 'temp_animal',
		xp: 20,
		intervalTime: 1200,
		unlockLevel: 4
	},
	sheep: {
		name: 'Sheep',
		image: 'temp_animal',
		xp: 30,
		intervalTime: 1400,
		unlockLevel: 8
	},
	goat: {
		name: 'Goat',
		image: 'temp_animal',
		xp: 40,
		intervalTime: 1600,
		unlockLevel: 12
	},
	cow: {
		name: 'Cow',
		image: 'temp_animal',
		xp: 50,
		intervalTime: 1800,
		unlockLevel: 16
	},
	pig: {
		name: 'Pig',
		image: 'temp_animal',
		xp: 60,
		intervalTime: 2000,
		unlockLevel: 20
	},
	horse: {
		name: 'Horse',
		image: 'temp_animal',
		xp: 70,
		intervalTime: 2200,
		unlockLevel: 24
	},
	fairy: {
		name: 'Fairy',
		image: 'temp_animal',
		xp: 80,
		intervalTime: 2400,
		unlockLevel: 28
	},
	griffin: {
		name: 'Griffin',
		image: 'temp_animal',
		xp: 90,
		intervalTime: 2600,
		unlockLevel: 32
	},
	unicorn: {
		name: 'Unicorn',
		image: 'temp_animal',
		xp: 100,
		intervalTime: 2800,
		unlockLevel: 36
	},
	chimera: {
		name: 'Chimera',
		image: 'temp_animal',
		xp: 110,
		intervalTime: 3000,
		unlockLevel: 40
	},
	dragon: {
		name: 'Dragon',
		image: 'temp_animal',
		xp: 120,
		intervalTime: 3200,
		unlockLevel: 44
	},
	hydra: {
		name: 'Hydra',
		image: 'temp_animal',
		xp: 130,
		intervalTime: 3400,
		unlockLevel: 48
	},
	ding_ding: {
		name: 'Ding Ding',
		image: 'temp_animal',
		xp: 140,
		intervalTime: 3600,
		unlockLevel: 52
	}
}
