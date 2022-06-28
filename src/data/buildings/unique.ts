import { ImmutableObject } from 'types/immutable'

import { Buildings } from './building'

export type Unique = Buildings<UniqueList>

export type UniqueList =
	| 'storage'
	| 'museum'
	| 'slayer master'

export const unique: ImmutableObject<Record<UniqueList, Unique>> = {
	storage: {
		name: 'storage',
		startingLevel: 1,
		maxLevel: 5,
		upgradeCost: {
			2: { gold: 0, materials: {} },
			3: { gold: 0, materials: {} },
			4: { gold: 0, materials: {} },
			5: { gold: 0, materials: {} }
		}
	},
	museum: {
		name: 'museum',
		startingLevel: 0,
		maxLevel: 5,
		upgradeCost: {
			1: { gold: 0, materials: {} },
			2: { gold: 0, materials: {} },
			3: { gold: 0, materials: {} },
			4: { gold: 0, materials: {} },
			5: { gold: 0, materials: {} }
		}
	},
	'slayer master': {
		name: 'slayer master',
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