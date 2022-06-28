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

interface ActivityStateSlice {
	active: boolean;
	activityName: string | null;
	intervalTime: number;
	reward: Reward;
}

const initialActivityState: ActivityStateSlice = {
	active: false,
	activityName: null,
	intervalTime: 0,
	reward: {}
}

const createActivityStateSlice: Slice<ActivityStore, ActivityStateSlice> = () => initialActivityState

export interface ChangeActivityData {
	activityName: string;
	intervalTime: number;
	reward: Reward;
}

interface ActivityActionSlice {
	changeActivity: (activityData: ChangeActivityData) => void;
	stopActivity: () => void;
	runActivity: () => void;
}

const createActivityActionSlice: Slice<ActivityStore, ActivityActionSlice> = (set, get) => ({
	changeActivity: ({ activityName, intervalTime, reward }) => {
		const { method, addXp, addItem } = (reward ?? {})
		set({
			active: true,
			activityName,
			intervalTime,
			reward: {}
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
	},
	stopActivity: () => {
		set({
			active: false,
			activityName: null,
			intervalTime: 0,
			reward: {}
		})
	},
	runActivity: () => {
		const { method, addXp, addItem } = get().reward

		method?.()

		if (addXp) {
			const skillStore = useSkillStore.getState()
			const { amount, skill, subskill } = addXp
			skillStore.addXp(amount, skill, subskill)
		}

		if (addItem) {
			const itemStore = useItemStore.getState()
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