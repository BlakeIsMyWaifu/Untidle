import { ImmutableObject } from 'types/immutable'

export type EnemyData = ImmutableObject<{
	name: string;
	image: string;
	level: number;
	stats: Record<string, unknown>;
}>

export const enemyData: ImmutableObject<Record<string, EnemyData>> = {

}