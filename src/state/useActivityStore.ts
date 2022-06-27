import { AllSubskillList, SkillList } from 'data/skills'
import { randomNum } from 'utils/maths'
import create, { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { ZustandPersist } from './commonTypes'
import { storage } from './storage'
import { useItemStore } from './useItemStore'
import { useSkillStore } from './useSkillStore'

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

type ActivityStore = ActivityStateSlice & ActivityActionSlice

const createActivityStateSlice: StateCreator<ActivityStore, [ZustandPersist], [], ActivityStateSlice> = () => initialActivityState

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

const createActivityActionSlice: StateCreator<ActivityStore, [ZustandPersist], [], ActivityActionSlice> = (set, get) => ({
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