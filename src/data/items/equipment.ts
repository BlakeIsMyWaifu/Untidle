import { Item } from './items'

export const statsList = [
	'Attack Speed',
	'Critical Chance',
	'Critical Damage',
	'Critical Resistance',
	'Dodge',
	'Health Regeneration',
	'Lifesteal',
	'Magic Find',
	'Magical Damage',
	'Magical Penetration',
	'Magical Pierce',
	'Magical Resistance',
	'Maximum Health Percentage',
	'Maximum Health',
	'Movement Speed',
	'Physical Damage',
	'Physical Penetration',
	'Physical Pierce',
	'Physical Resistance',
	'Slaying'
] as const

export type StatsList = typeof statsList[number]

export interface Equipment extends Item {
	type: 'equipment';
	category: EquipmentSlot;
	fixedStats: Partial<Record<StatsList, number>>;
}

export interface CollectedEquipment extends Equipment {
	id: number;
	quality: number;
	stats: Partial<Record<StatsList, number>>;
}

export type EquipmentSlot =
	// weapon
	| 'mainHand'
	| 'offHand'
	| 'ammo'
	// armour
	| 'helmet'
	| 'chest'
	| 'pants'
	| 'pauldron'
	| 'bracer'
	| 'gloves'
	// jewellery
	| 'ring'
	| 'amulet'
	// belt
	| 'belt'

export type EquipmentList = keyof typeof equipmentData

const equipmentData: Record<string, Equipment> = {
	sword: {
		name: 'sword',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'common',
		category: 'mainHand',
		fixedStats: {}
	},
	staff: {
		name: 'staff',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'common',
		category: 'mainHand',
		fixedStats: {}
	},
	helmet: {
		name: 'helmet',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'rare',
		category: 'helmet',
		fixedStats: {}
	},
	chest: {
		name: 'chest',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'epic',
		category: 'chest',
		fixedStats: {}
	},
	ringOne: {
		name: 'ringOne',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'legendary',
		category: 'ring',
		fixedStats: {}
	},
	ringTwo: {
		name: 'ringTwo',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'mythic',
		category: 'ring',
		fixedStats: {}
	},
	ringThree: {
		name: 'ringThree',
		image: 'temp_equipment',
		type: 'equipment',
		rarity: 'common',
		category: 'ring',
		fixedStats: {}
	}
}

export const getEquipment = (equipmentName: string): Equipment => {
	const equipment = equipmentData[equipmentName]
	if (!equipment) console.error(`Cannot find equipment ${equipmentName}`)
	return equipment ?? {
		name: 'Error - Unknown Equipment Name',
		image: 'temp_placeholder',
		type: 'equipment',
		rarity: 'common',
		category: 'mainHand',
		fixedStats: {}
	}
}

export const equipmentList = Object.keys(equipmentData)