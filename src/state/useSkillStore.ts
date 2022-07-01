import { SkillList, SubskillList, Subskills } from 'data/skills/skills'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'

type SkillStore = SkillStateSlice & SkillActionSlice

export type Skill<T extends SkillList = 'slayer'> = Partial<Record<SubskillList, SkillStats>> & Record<Subskills<T> | 'main', SkillStats>

export interface SkillStats {
	xp: number;
	level: number;
	xpNeeded: number;
}

interface SkillStateSlice {
	skills: {
		[K in SkillList]: Skill<K>;
	};
	totalLevel: number;
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
			main: { xp: 0, level: 0, xpNeeded: 1 }
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
			main: { xp: 0, level: 0, xpNeeded: 1 }
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
	},
	totalLevel: 15
}

const createSkillStateSlice: Slice<SkillStore, SkillStateSlice> = () => initialSkillState

interface SkillActionSlice {
	/**
	 * Adds xp to a given subskill
	 *
	 * 100% of the xp will be given to the subskill and in addition 50% will be given to the main skill
	 *
	 * @param amount - The amount of xp given
	 * @param skill - Must be a main skill name
	 * @param subskill - Must be a subskill name of the skill previously provided. If no subskill is given it will default to main.
	 * @throws If the subskill given does not match the skill it will throw an error
	 * @returns void
	 */
	addXp: <T extends SkillList>(amount: number, skill: T, subskill?: Subskills<T>) => void;

	/**
	 * Resets an entire skills xp including main and all subskills
	 *
	 * Only to be used in dev mode.
	 * There is no reason this should be used otherwise.
	 *
	 * @returns void
	 */
	resetSkill: (skill: SkillList) => void;
}

const noSubskillDataError = new Error('No subskill data found. Make sure that the subskill given is for the correct skill!')

const createSkillActionSlice: Slice<SkillStore, SkillActionSlice> = (set, get) => ({
	addXp: (amount, skill, subskill) => {
		if (subskill !== 'main') {
			get().addXp(~~(amount / 2), skill, 'main')
		}

		const subskillDefined = subskill ?? 'main'
		const subskillData = get().skills[skill][subskillDefined]

		if (!subskillData) throw noSubskillDataError

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
			if (!updatedSubskillData) throw noSubskillDataError
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

				if (subskill === 'main') {
					set(state => ({ totalLevel: state.totalLevel + 1 }))
				}

				levelUp(skill, subskill)
			}
		}

		levelUp(skill, subskillDefined)
	},
	resetSkill: skill => set(({ [skill]: initialSkillState.skills[skill] }))
})

export const useSkillStore = create<SkillStore>()(persist((...a) => ({
	...createSkillStateSlice(...a),
	...createSkillActionSlice(...a)
}), {
	name: 'skill',
	getStorage: () => storage
}))