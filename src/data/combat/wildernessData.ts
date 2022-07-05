import { EnemyData, enemyData } from './enemyData'

export interface WildernessData {
	name: string;
	image: string;
	levelRequired: number;
	enemies: EnemyData[];
}

export const wildernessData: Record<string, WildernessData> = {
	one: {
		name: 'one',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: [enemyData.zombie]
	},
	two: {
		name: 'two',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	three: {
		name: 'three',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	four: {
		name: 'four',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	five: {
		name: 'five',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	}
}