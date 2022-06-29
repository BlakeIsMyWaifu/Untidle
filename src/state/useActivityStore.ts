import { AllSubskillList, SkillList } from 'data/skills'
import { Slice } from 'types/zustand'
import { randomNum } from 'utils/maths'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'
import { useItemStore } from './useItemStore'
import { useSkillStore } from './useSkillStore'

type ActivityStore = ActivityStateSlice & ActivityActionSlice

interface Reward {
	method?: () => void;
	addXp?: {
		amount: number;
		skill: SkillList;
		subskill: AllSubskillList;
	};
	addItem?: {
		materials?: {
			name: string;
			amount: number | [number, number];
		}[];
		equipment?: [];
	};
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
	intervalTime: number;
	reward: Reward;
	cost: Cost;
}

const initialActivityState: ActivityStateSlice = {
	active: false,
	activityName: null,
	intervalTime: 0,
	reward: {},
	cost: {}
}

const createActivityStateSlice: Slice<ActivityStore, ActivityStateSlice> = () => initialActivityState

export interface ChangeActivityData {
	activityName: string;
	intervalTime: number;
	reward: Reward;
	cost?: Cost;
}

interface ActivityActionSlice {
	changeActivity: (activityData: ChangeActivityData) => void;
	stopActivity: () => void;
	runActivity: () => void;
}

const createActivityActionSlice: Slice<ActivityStore, ActivityActionSlice> = (set, get) => ({
	changeActivity: ({ activityName, intervalTime, reward, cost }) => {
		const { method, addXp, addItem } = (reward ?? {})
		set({
			active: true,
			activityName,
			intervalTime,
			reward: {},
			cost: {}
		})
		if (method) {
			set(state => ({
				reward: {
					...state.reward,
					method
				}
			}))
		}
		if (addXp) {
			set(state => ({
				reward: {
					...state.reward,
					addXp
				}
			}))
		}
		if (addItem) {
			set(state => ({
				reward: {
					...state.reward,
					addItem
				}
			}))
		}
		if (cost) {
			set(() => ({ cost }))
		}
	},
	stopActivity: () => {
		set({
			active: false,
			activityName: null,
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

		const { method, addXp, addItem } = get().reward

		method?.()

		if (addXp) {
			const skillStore = useSkillStore.getState()
			const { amount, skill, subskill } = addXp
			skillStore.addXp(amount, skill, subskill)
		}

		if (addItem) { // TODO add equipment to reward and cost
			const { materials } = addItem
			materials?.forEach(material => {
				const amount = Array.isArray(material.amount)
					? randomNum(material.amount[1], material.amount[0])
					: material.amount
				itemStore.addMaterial(material.name, amount)
			})
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