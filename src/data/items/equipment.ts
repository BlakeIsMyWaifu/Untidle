import { Item } from './items'

export type StatsList =
	| 'Attack Speed'
	| 'Critical Chance'
	| 'Critical Damage'
	| 'Critical Resistance'
	| 'Dodge'
	| 'Health Regeneration'
	| 'Lifesteal'
	| 'Magic Find'
	| 'Magical Damage'
	| 'Magical Penetration'
	| 'Magical Pierce'
	| 'Magical Resistance'
	| 'Maximum Health Percentage'
	| 'Maximum Health'
	| 'Movement Speed'
	| 'Physical Damage'
	| 'Physical Penetration'
	| 'Physical Pierce'
	| 'Physical Resistance'
	| 'Slaying'

export interface Equipment extends Item {
	slot: EquipmentSlot;
	category: EquipmentCategory;
	fixedStats: Partial<Record<StatsList, number>>;
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

type EquipmentCategory =
	| 'sword'

export type EquipmentList = keyof typeof equipmentData

const equipmentData: Record<string, Equipment> = {

}