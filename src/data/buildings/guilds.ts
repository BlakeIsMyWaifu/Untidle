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
		image: 'temp_building',
		buildingType: 'guild',
		skill: 'agriculture',
		startingLevel: 0,
		maxLevel: 5,
		upgradeCosts: {
			1: { gold: 10, materials: { stone: 10 } },
			2: { gold: 20, materials: { stone: 20 } },
			3: { gold: 30, materials: { stone: 30 } },
			4: { gold: 40, materials: { stone: 40 } },
			5: { gold: 50, materials: { stone: 50 } }
		}
	}
}