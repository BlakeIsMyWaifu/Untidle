import { SkillList } from 'data/skills/skills'
import { ImmutableObject } from 'types/immutable'

import { Buildings } from './building'

export interface Guild extends Buildings<GuildList, 'guild'> {
	skill: SkillList;
}

export type GuildList =
	| 'temp'

export const guildData: ImmutableObject<Record<GuildList, Guild>> = {
	temp: {
		name: 'temp',
		buildingType: 'guild',
		skill: 'agriculture',
		startingLevel: 0,
		maxLevel: 5,
		upgradeCost: {
			1: { gold: 0, materials: { stone: 10 } },
			2: { gold: 0, materials: { stone: 20 } },
			3: { gold: 0, materials: { stone: 30 } },
			4: { gold: 0, materials: { stone: 40 } },
			5: { gold: 0, materials: { stone: 50 } }
		}
	}
}