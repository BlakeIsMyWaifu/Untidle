import { SkillList, SubskillList, Subskills } from 'data/skills/skills'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'

type SkillStore = SkillStateSlice & SkillActionSlice

export type Skill = Partial<Record<SubskillList, SkillStats>> & Record<'main', SkillStats>

export interface SkillStats {
	xp: number;
	level: number;
	xpNeeded: number;
}

interface SkillStateSlice {
	skills: Record<SkillList, Skill>;
}

export const initialSkillState: SkillStateSlice = {
	skills: {
		agriculture: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			farming: { xp: 0, level: 1, xpNeeded: 82 },
			horticulture: { xp: 0, level: 1, xpNeeded: 82 },
			ranching: { xp: 0, level: 1, xpNeeded: 82 }
		},
		alchemy: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			buffs: { xp: 0, level: 1, xpNeeded: 82 },
			healing: { xp: 0, level: 1, xpNeeded: 82 },
			debuffs: { xp: 0, level: 1, xpNeeded: 82 }
		},
		arcane: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			runecrafting: { xp: 0, level: 1, xpNeeded: 82 },
			summoning: { xp: 0, level: 1, xpNeeded: 82 },
			enchanting: { xp: 0, level: 1, xpNeeded: 82 }
		},
		architecture: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			masonry: { xp: 0, level: 1, xpNeeded: 82 },
			guilds: { xp: 0, level: 1, xpNeeded: 82 },
			carpentry: { xp: 0, level: 1, xpNeeded: 82 }
		},
		artificer: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			crafting: { xp: 0, level: 1, xpNeeded: 82 },
			jewelcrafting: { xp: 0, level: 1, xpNeeded: 82 },
			fletching: { xp: 0, level: 1, xpNeeded: 82 }
		},
		astronomy: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			stargazing: { xp: 0, level: 1, xpNeeded: 82 },
			devotion: { xp: 0, level: 1, xpNeeded: 82 }
		},
		culinary: {
			main: { xp: 0, level: 1, xpNeeded: 82 }
		},
		dungeoneering: {
			main: { xp: 0, level: 1, xpNeeded: 82 }
		},
		excavation: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			digging: { xp: 0, level: 1, xpNeeded: 82 },
			archeology: { xp: 0, level: 1, xpNeeded: 82 }
		},
		fishing: {
			main: { xp: 0, level: 1, xpNeeded: 82 }
		},
		hunter: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			marksman: { xp: 0, level: 1, xpNeeded: 82 },
			assassination: { xp: 0, level: 1, xpNeeded: 82 }
		},
		mining: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			quarrying: { xp: 0, level: 1, xpNeeded: 82 },
			spelunking: { xp: 0, level: 1, xpNeeded: 82 }
		},
		slayer: {
			main: { xp: 0, level: 1, xpNeeded: 82 }
		},
		smithing: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			metallurgy: { xp: 0, level: 1, xpNeeded: 82 },
			armoury: { xp: 0, level: 1, xpNeeded: 82 },
			weaponry: { xp: 0, level: 1, xpNeeded: 82 }
		},
		sorcery: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			elemental: { xp: 0, level: 1, xpNeeded: 82 },
			chaos: { xp: 0, level: 1, xpNeeded: 82 }
		},
		strength: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			berserker: { xp: 0, level: 1, xpNeeded: 82 },
			guardian: { xp: 0, level: 1, xpNeeded: 82 }
		},
		survival: {
			main: { xp: 0, level: 1, xpNeeded: 82 },
			woodcutting: { xp: 0, level: 1, xpNeeded: 82 },
			firemaking: { xp: 0, level: 1, xpNeeded: 82 },
			foraging: { xp: 0, level: 1, xpNeeded: 82 }
		}
	}
}

const createSkillStateSlice: Slice<SkillStore, SkillStateSlice> = () => initialSkillState

interface SkillActionSlice {
	addXp: <T extends SkillList>(amount: number, skill: T, subskill?: Subskills<T>) => void;
	resetSkill: (skill: SkillList) => void;
}

const createSkillActionSlice: Slice<SkillStore, SkillActionSlice> = (set, get) => ({
	addXp: (amount, skill, subskill) => {
		if (subskill !== 'main') {
			get().addXp(~~(amount / 2), skill, 'main')
		}

		const subskillDefined = subskill ?? 'main'
		const subskillData = get().skills[skill][subskillDefined]

		if (!subskillData) return

		set(state => ({
			skills: {
				...state.skills,
				[skill]: {
					...state.skills[skill],
					[subskillDefined]: {
						...subskillData,
						xp: subskillData.xp + amount
					}
				}
			}
		}))

		const levelUp = <T extends SkillList>(skill: T, subskill: Subskills<T>): void => {

			const updatedSubskillData = (get().skills[skill][subskill])
			if (!updatedSubskillData) return
			const { xp, xpNeeded } = updatedSubskillData

			if (xp >= xpNeeded) {

				const calculateXpNeeded = (level: number): number => ~~(0.16 * (level * (512 + (2 ** (level / 5)))))

				set(state => ({
					skills: {
						...state.skills,
						[skill]: {
							...state.skills[skill],
							[subskill]: {
								...updatedSubskillData,
								xp: updatedSubskillData.xp - xpNeeded,
								level: updatedSubskillData.level + 1,
								xpNeeded: calculateXpNeeded(updatedSubskillData.level + 1)
							}
						}
					}
				}))

				levelUp(skill, subskill)
			}
		}

		levelUp(skill, subskillDefined)
	},
	resetSkill: skill => set(() => ({
		[skill]: initialSkillState.skills[skill]
	}))
})

export const useSkillStore = create<SkillStore>()(persist((...a) => ({
	...createSkillStateSlice(...a),
	...createSkillActionSlice(...a)
}), {
	name: 'skill',
	getStorage: () => storage
}))