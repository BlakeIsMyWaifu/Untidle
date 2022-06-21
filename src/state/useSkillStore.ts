import create from 'zustand'
import { persist } from 'zustand/middleware'

import { StoreSlice } from './createStore'
import { storage } from './storage'

type Skill<T extends string = never> = Record<T | 'main', SkillStats>

interface SkillStats {
	xp: number;
	level: number;
}

type SkillList = keyof SkillStateSlice

interface SkillStateSlice {
	agriculture: Skill<'farming' | 'horticulture' | 'ranching'>;
	alchemy: Skill<'buffs' | 'healing' | 'debuffs'>;
	arcane: Skill<'runecrafting' | 'summoning' | 'enchanting'>;
	architecture: Skill<'masonry' | 'guilds' | 'carpentry'>;
	artificer: Skill<'crafting' | 'fletching'>;
	astronomy: Skill<'stargazing' | 'devotion'>;
	culinary: Skill;
	dungeoneering: Skill;
	excavation: Skill<'digging' | 'archeology'>;
	fishing: Skill;
	hunter: Skill<'marksman' | 'assassination'>;
	mining: Skill<'quarrying' | 'spelunking'>;
	slayer: Skill;
	smithing: Skill<'armoury' | 'jewelcrafting' | 'weaponry'>;
	sorcery: Skill<'elemental' | 'chaos'>;
	strength: Skill<'berserker' | 'guardian'>;
	survival: Skill<'woodcutting' | 'firemaking' | 'foraging'>;
}

interface SkillActionSlice {
	addMainXp: (skill: SkillList, amount: number) => void;
	addSubXp: <T extends SkillList>(skill: T, subskill: keyof SkillStateSlice[T], amount: number) => void;
	resetSkill: (skill: SkillList) => void;
}

type SkillStore = SkillStateSlice & SkillActionSlice

const initialSkillState = {
	agriculture: {
		main: { xp: 0, level: 0 },
		farming: { xp: 0, level: 0 },
		horticulture: { xp: 0, level: 0 },
		ranching: { xp: 0, level: 0 }
	},
	alchemy: {
		main: { xp: 0, level: 0 },
		buffs: { xp: 0, level: 0 },
		healing: { xp: 0, level: 0 },
		debuffs: { xp: 0, level: 0 }
	},
	arcane: {
		main: { xp: 0, level: 0 },
		runecrafting: { xp: 0, level: 0 },
		summoning: { xp: 0, level: 0 },
		enchanting: { xp: 0, level: 0 }
	},
	architecture: {
		main: { xp: 0, level: 0 },
		carpentry: { xp: 0, level: 0 },
		masonry: { xp: 0, level: 0 },
		guilds: { xp: 0, level: 0 }
	},
	artificer: {
		main: { xp: 0, level: 0 },
		crafting: { xp: 0, level: 0 },
		fletching: { xp: 0, level: 0 }
	},
	astronomy: {
		main: { xp: 0, level: 0 },
		stargazing: { xp: 0, level: 0 },
		devotion: { xp: 0, level: 0 }
	},
	culinary: {
		main: { xp: 0, level: 0 }
	},
	dungeoneering: {
		main: { xp: 0, level: 0 }
	},
	excavation: {
		main: { xp: 0, level: 0 },
		digging: { xp: 0, level: 0 },
		archeology: { xp: 0, level: 0 }
	},
	fishing: {
		main: { xp: 0, level: 0 }
	},
	hunter: {
		main: { xp: 0, level: 0 },
		marksman: { xp: 0, level: 0 },
		assassination: { xp: 0, level: 0 }
	},
	mining: {
		main: { xp: 0, level: 0 },
		quarrying: { xp: 0, level: 0 },
		spelunking: { xp: 0, level: 0 }
	},
	slayer: {
		main: { xp: 0, level: 0 }
	},
	smithing: {
		main: { xp: 0, level: 0 },
		armoury: { xp: 0, level: 0 },
		jewelcrafting: { xp: 0, level: 0 },
		weaponry: { xp: 0, level: 0 }
	},
	sorcery: {
		main: { xp: 0, level: 0 },
		elemental: { xp: 0, level: 0 },
		chaos: { xp: 0, level: 0 }
	},
	strength: {
		main: { xp: 0, level: 0 },
		berserker: { xp: 0, level: 0 },
		guardian: { xp: 0, level: 0 }
	},
	survival: {
		main: { xp: 0, level: 0 },
		woodcutting: { xp: 0, level: 0 },
		firemaking: { xp: 0, level: 0 },
		foraging: { xp: 0, level: 0 }
	}
}

const createSkillStateSlice: StoreSlice<SkillStateSlice> = () => initialSkillState

const createSkillActionSlice: StoreSlice<SkillActionSlice, SkillStateSlice> = (set, get) => ({
	addMainXp: (skill, amount) => {
		set(state => ({
			[skill]: {
				...state[skill],
				main: {
					...state[skill].main,
					xp: state[skill].main.xp + amount
				}
			}
		}))
	},
	addSubXp: (skill, subskill, amount) => {
		get().addMainXp(skill, ~~(amount / 2))
		set(state => ({
			[skill]: {
				...state[skill],
				[subskill]: {
					...state[skill][subskill],
					xp: (state[skill][subskill] as unknown as SkillStats).xp + amount
				}
			}
		}))
	},
	resetSkill: skill => set(() => ({
		[skill]: initialSkillState[skill]
	}))
})

export const useSkillStore = create<SkillStore>()(persist((set, get) => ({
	...createSkillStateSlice(set, get),
	...createSkillActionSlice(set, get)
}), {
	name: 'skill',
	getStorage: () => storage
}))