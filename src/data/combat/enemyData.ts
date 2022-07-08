export interface EnemyData {
	name: EnemyList;
	image: string;
	level: number;
	stats: EnemyStats;
}

interface EnemyStats {
	health: number;
}

type EnemyList =
	| 'zombie'

export const enemyData: Record<EnemyList, EnemyData> = {
	zombie: {
		name: 'zombie',
		image: 'temp_enemy',
		level: 1,
		stats: {
			health: 10
		}
	}
}