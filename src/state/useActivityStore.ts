import { AllSubskillList, SkillList } from 'data/skills'
import create, { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { ZustandPersist } from './commonTypes'
import { storage } from './storage'
import { useSkillStore } from './useSkillStore'

interface ActivityStateSlice {
	active: boolean;
	activityName: string | null;
	intervalTime: number;
	method: () => void;
	addXp: {
		amount: number;
		skill: SkillList;
		subskill: AllSubskillList;
	};
}

const initialActivityState: ActivityStateSlice = {
	active: false,
	activityName: null,
	intervalTime: 0,
	addXp: {
		amount: 0,
		skill: 'agriculture',
		subskill: 'farming'
	},
	method: () => undefined
}

type ActivityStore = ActivityStateSlice & ActivityActionSlice

const createActivityStateSlice: StateCreator<ActivityStore, [ZustandPersist], [], ActivityStateSlice> = () => initialActivityState

export interface ChangeActivityData {
	activityName: string;
	intervalTime: number;
	method?: () => void;
	addXp?: {
		amount: number;
		skill: SkillList;
		subskill: AllSubskillList;
	};
}

interface ActivityActionSlice {
	changeActivity: (activityData: ChangeActivityData) => void;
	stopActivity: () => void;
	runActivity: () => void;
}

const createActivityActionSlice: StateCreator<ActivityStore, [ZustandPersist], [], ActivityActionSlice> = (set, get) => ({
	changeActivity: ({ activityName, intervalTime, method, addXp }) => {
		set({
			active: true,
			activityName,
			intervalTime,
			method: method ?? (() => undefined)
		})
		if (addXp) {
			set({
				addXp
			})
		}
	},
	stopActivity: () => {
		set({
			active: false,
			activityName: null,
			intervalTime: 0,
			method: () => undefined
		})
	},
	runActivity: () => {
		get().method()

		const { addXp } = get()
		if (addXp) {
			const skillStore = useSkillStore.getState()
			const { amount, skill, subskill } = addXp
			skillStore.addXp(amount, skill, subskill)
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