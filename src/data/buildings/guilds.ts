import { SkillList } from 'data/skills'
import { ImmutableObject } from 'types/immutable'

import { Buildings } from './building'

export interface Guild extends Buildings<GuildList> {
	skill: SkillList;
}

export type GuildList =
	| 'temp'

export const guilds: ImmutableObject<Record<GuildList, Guild>> = {
	temp: {
		name: 'temp',
		skill: 'agriculture',
		startingLevel: 0,
		maxLevel: 5,
		upgradeCost: {
			1: { gold: 0, materials: {} },
			2: { gold: 0, materials: {} },
			3: { gold: 0, materials: {} },
			4: { gold: 0, materials: {} },
			5: { gold: 0, materials: {} }
		}
	}
}