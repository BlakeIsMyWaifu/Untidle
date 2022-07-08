export interface EnemyData {
	name: EnemyList;
	image: string;
	level: number;
	stats: Record<EnemyStatsList, number>;
}

type EnemyStatsList =
	| 'health'
	| 'attackSpeed'
	| 'damage'

type EnemyList =
	| 'zombie'

export const enemyData: Record<EnemyList, EnemyData> = {
	zombie: {
		name: 'zombie',
		image: 'temp_enemy',
		level: 1,
		stats: {
			health: 10,
			attackSpeed: 8000,
			damage: 1
		}
	}
}