import { SkillList, SubskillList } from 'data/skills/skills'
import { Slice } from 'types/zustand'
import { randomNum } from 'utils/maths'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'
import { useGoldStore } from './useGoldStore'
import { useItemStore } from './useItemStore'
import { useSkillStore } from './useSkillStore'

type ActivityStore = ActivityStateSlice & ActivityActionSlice

/**
 * - method - is an additional function to be ran on every activity completion
 *
 * - addXp - Xp given every completion
 *
 * - addItem - Items to be given every completion.
 *   - material
 *     - name - The name of the material in lowercase
 *     - amount - May be either a flat number or a number tuple of min and max
 *     - chance - A number out from 0 to 100 of the percentage of giving the item
 *   - equipment - An array of complete equipment data (currently does nothing)
 *
 * - gold - Gold given every completion
 */
interface Reward {
	method?: () => void;
	addXp?: { // TODO change to array so an activity could add xp to multiple skills
		amount: number;
		skill: SkillList;
		subskill: SubskillList;
	};
	addItem?: {
		materials?: {
			name: string;
			amount: number | [number, number];
			chance?: number;
		}[];
		equipment?: [];
	};
	gold?: number;
}

interface Cost {
	materials?: {
		name: string;
		amount: number;
	}[];
	equipment?: [];
}

interface ActivityStateSlice {
	active: boolean;
	activityName: string | null;
	activitySkill: SubskillList | null;
	intervalTime: number;
	reward: Reward;
	cost: Cost;
}

const initialActivityState: ActivityStateSlice = {
	active: false,
	activityName: null,
	activitySkill: null,
	intervalTime: 0,
	reward: {},
	cost: {}
}

const createActivityStateSlice: Slice<ActivityStore, ActivityStateSlice> = () => initialActivityState

export interface ChangeActivityData {
	activityName: string;
	activitySkill: SubskillList;
	intervalTime: number;
	reward: Reward;
	cost?: Cost;
}

interface ActivityActionSlice {
	/**
	 * Changes the currently active activity
	 *
	 * @param activityData - The new activity to be worked
	 * @returns void
	 */
	changeActivity: (activityData: ChangeActivityData) => void;

	/**
	 * Stops the currently active activity
	 *
	 * @returns void
	 */
	stopActivity: () => void;

	/**
	 * **Do not use!**
	 *
	 * Only to be used in the activity loop component
	 *
	 * @returns void
	 */
	runActivity: () => void;
}

const createActivityActionSlice: Slice<ActivityStore, ActivityActionSlice> = (set, get) => ({
	changeActivity: ({ activityName, activitySkill, intervalTime, reward, cost }) => {
		set({
			active: true,
			activityName,
			activitySkill,
			intervalTime,
			reward: {},
			cost: {}
		})
		if (reward) {
			set(({ reward }))
		}
		if (cost) {
			set(() => ({ cost }))
		}
	},
	stopActivity: () => {
		set({
			active: false,
			activityName: null,
			activitySkill: null,
			intervalTime: 0,
			reward: {},
			cost: {}
		})
	},
	runActivity: () => {
		const { cost } = get()

		const itemStore = useItemStore.getState()

		if (cost) {
			const { materials } = cost

			// ? might not be need with activity button checks
			// const hasMaterials = materials?.every(({ name, amount }) => hasCost({ materials: { [name]: amount } })) ?? true

			// if (!hasMaterials) {
			// 	return get().stopActivity()
			// }

			materials?.forEach(({ name, amount }) => {
				itemStore.removeMaterial(name, amount)
			})
		}

		const { method, addXp, addItem, gold } = get().reward

		method?.()

		if (addXp) {
			const skillStore = useSkillStore.getState()
			const { amount, skill, subskill } = addXp
			skillStore.addXp(amount, skill, subskill)
		}

		// TODO add equipment to reward and cost
		if (addItem) {
			const { materials } = addItem

			materials?.forEach(material => {
				if (material.chance && material.chance < randomNum(99)) return

				const amount = Array.isArray(material.amount)
					? randomNum(material.amount[1], material.amount[0])
					: material.amount

				itemStore.addMaterial(material.name, amount)
			})
		}

		if (gold) {
			const goldStore = useGoldStore.getState()
			goldStore.addGold(gold)
		}
	}
})

export const useActivityStore = create<ActivityStore>()(persist((...a) => ({
	...createActivityStateSlice(...a),
	...createActivityActionSlice(...a)
}), {
	name: 'activity',
	getStorage: () => storage
}))