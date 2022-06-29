import { ImmutableObject } from 'types/immutable'

import { Buildings } from './building'

export type Unique = Buildings<UniqueList>

export type UniqueList =
	| 'storage'
	| 'museum'
	| 'slayer master'

export const uniqueData: ImmutableObject<Record<UniqueList, Unique>> = {
	storage: {
		name: 'storage',
		startingLevel: 1,
		maxLevel: 5,
		upgradeCost: {
			2: { gold: 0, materials: { stone: 20 } },
			3: { gold: 0, materials: { stone: 30 } },
			4: { gold: 0, materials: { stone: 40 } },
			5: { gold: 0, materials: { stone: 50 } }
		}
	},
	museum: {
		name: 'museum',
		startingLevel: 0,
		maxLevel: 5,
		upgradeCost: {
			1: { gold: 0, materials: { stone: 10 } },
			2: { gold: 0, materials: { stone: 20 } },
			3: { gold: 0, materials: { stone: 30 } },
			4: { gold: 0, materials: { stone: 40 } },
			5: { gold: 0, materials: { stone: 50 } }
		}
	},
	'slayer master': {
		name: 'slayer master',
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