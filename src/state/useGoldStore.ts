import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

type GoldStore = GoldStateSlice & GoldActionSlice

interface GoldStateSlice {
	gold: number;
}

const initialGoldState: GoldStateSlice = {
	gold: 0
}

const createGoldStateSlice: Slice<GoldStore, GoldStateSlice> = () => initialGoldState

interface GoldActionSlice {
	/**
	 * Adds gold to the players pouch
	 *
	 * @param amount - Number of gold to be added
	 * @returns void
	 */
	addGold: (amount: number) => void;

	/**
	 * Removes gold to the players pouch.
	 *
	 * Does NOT check if the player has enough gold.
	 * Must be checked before call
	 *
	 * @param amount - Number of gold to be removed
	 * @returns void
	 */
	removeGold: (amount: number) => void;

	/**
	 * Resets the players gold to the initial number
	 *
	 * @returns void
	 */
	resetGold: () => void;
}

const createGoldActionSlice: Slice<GoldStore, GoldActionSlice> = set => ({
	addGold: amount => {
		set(state => ({
			gold: state.gold + amount
		}))
	},
	removeGold: amount => {
		set(state => ({
			gold: state.gold - amount
		}))
	},
	resetGold: () => {
		set({ gold: initialGoldState.gold })
	}
})

export const useGoldStore = create<GoldStore>()(persist((...a) => ({
	...createGoldStateSlice(...a),
	...createGoldActionSlice(...a)
}), {
	name: 'gold',
	getStorage: () => storage
}))