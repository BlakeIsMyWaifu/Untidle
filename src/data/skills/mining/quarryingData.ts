interface QuarryingData {
	name: string;
	image: string;
	xp: number;
	intervalTime: number;
	unlockLevel: number;
}

export const quarryingData: Record<string, QuarryingData> = {
	iron: {
		name: 'Iron',
		image: 'temp_mineable',
		xp: 10,
		intervalTime: 1200,
		unlockLevel: 1
	},
	gold: {
		name: 'Gold',
		image: 'temp_mineable',
		xp: 20,
		intervalTime: 1400,
		unlockLevel: 4
	},
	silver: {
		name: 'Silver',
		image: 'temp_mineable',
		xp: 30,
		intervalTime: 1600,
		unlockLevel: 8
	},
	aluminium: {
		name: 'Aluminium',
		image: 'temp_mineable',
		xp: 40,
		intervalTime: 1800,
		unlockLevel: 12
	},
	copper: {
		name: 'Copper',
		image: 'temp_mineable',
		xp: 50,
		intervalTime: 2000,
		unlockLevel: 16
	},
	tin: {
		name: 'Tin',
		image: 'temp_mineable',
		xp: 60,
		intervalTime: 2200,
		unlockLevel: 20
	},
	titanium: {
		name: 'Titanium',
		image: 'temp_mineable',
		xp: 70,
		intervalTime: 2400,
		unlockLevel: 24
	},
	sodium: {
		name: 'Sodium',
		image: 'temp_mineable',
		xp: 80,
		intervalTime: 2600,
		unlockLevel: 28
	},
	sulphur: {
		name: 'Sulphur',
		image: 'temp_mineable',
		xp: 90,
		intervalTime: 2800,
		unlockLevel: 32
	},
	zinc: {
		name: 'Zinc',
		image: 'temp_mineable',
		xp: 100,
		intervalTime: 3000,
		unlockLevel: 36
	},
	coal: {
		name: 'Coal',
		image: 'temp_mineable',
		xp: 110,
		intervalTime: 3200,
		unlockLevel: 40
	},
	quartz: {
		name: 'Quartz',
		image: 'temp_mineable',
		xp: 120,
		intervalTime: 3600,
		unlockLevel: 44
	}
}