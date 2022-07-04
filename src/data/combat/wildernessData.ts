import { ImmutableArray, ImmutableObject } from 'types/immutable'

import { EnemyData } from './enemyData'

export type WildernessData = ImmutableObject<{
	name: string;
	image: string;
	levelRequired: number;
	enemies: EnemyData[];
}>

export const wildernessData: ImmutableArray<WildernessData> = [
	{
		name: 'one',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	{
		name: 'two',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	{
		name: 'three',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	{
		name: 'four',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	},
	{
		name: 'five',
		image: 'temp_wilderness',
		levelRequired: 0,
		enemies: []
	}
]