export interface EnemyData {
	name: EnemyList;
	image: string;
	level: number;
	stats: Record<string, unknown>;
}

type EnemyList =
	| 'zombie'

export const enemyData: Record<EnemyList, EnemyData> = {
	zombie: {
		name: 'zombie',
		image: 'temp_enemy',
		level: 1,
		stats: {}
	}
}