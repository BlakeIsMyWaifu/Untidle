export interface Item {
	name: string;
	image: string;
	rarity: Rarity;
}

export type Rarity =
	| 'common'
	| 'rare'
	| 'epic'
	| 'legendary'
	| 'mythic'
	| 'rainbow'