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
	slot: EquipmentSlot;
	fixedStats: Partial<Record<StatsList, number>>;
}

export interface CollectedEquipment extends Equipment {
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

export const equipmentData: Record<string, Equipment> = {
	sword: {
		name: 'sword',
		image: 'temp_equipment',
		rarity: 'common',
		slot: 'mainHand',
		fixedStats: {}
	},
	staff: {
		name: 'staff',
		image: 'temp_equipment',
		rarity: 'common',
		slot: 'mainHand',
		fixedStats: {}
	},
	helmet: {
		name: 'helmet',
		image: 'temp_equipment',
		rarity: 'rare',
		slot: 'helmet',
		fixedStats: {}
	},
	chest: {
		name: 'chest',
		image: 'temp_equipment',
		rarity: 'epic',
		slot: 'chest',
		fixedStats: {}
	},
	ringOne: {
		name: 'ringOne',
		image: 'temp_equipment',
		rarity: 'legendary',
		slot: 'ring',
		fixedStats: {}
	},
	ringTwo: {
		name: 'ringTwo',
		image: 'temp_equipment',
		rarity: 'mythic',
		slot: 'ring',
		fixedStats: {}
	},
	ringThree: {
		name: 'ringThree',
		image: 'temp_equipment',
		rarity: 'common',
		slot: 'ring',
		fixedStats: {}
	}
}

export const equipmentList = Object.keys(equipmentData)