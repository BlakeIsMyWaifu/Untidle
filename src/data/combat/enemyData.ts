import { StatsList } from 'data/items/equipment'

export interface EnemyData {
	name: EnemyList;
	image: string;
	level: number;
	stats: Record<EnemyStatsList, number>;
}

type EnemyMissingStats =
	| 'Magic Find'
	| 'Movement Speed'
	| 'Slaying'
type EnemyStatsList = Exclude<StatsList, EnemyMissingStats>

type EnemyList =
	| 'zombie'

export const enemyData: Record<EnemyList, EnemyData> = {
	zombie: {
		name: 'zombie',
		image: 'temp_enemy',
		level: 1,
		stats: {
			'Attack Speed': 8000,
			'Critical Chance': 0,
			'Critical Damage': 0,
			'Critical Resistance': 0,
			'Dodge': 0,
			'Health Regeneration': 0,
			'Lifesteal': 0,
			'Magical Damage': 0,
			'Magical Penetration': 0,
			'Magical Pierce': 0,
			'Magical Resistance': 0,
			'Maximum Health Percentage': 0,
			'Maximum Health': 10,
			'Physical Damage': 1,
			'Physical Penetration': 0,
			'Physical Pierce': 0,
			'Physical Resistance': 0
		}
	}
}