export interface Item {
	name: string;
	image: string;
	rarity: Rarity;
	category: string;
}

export type Rarity =
	| 'common'
	| 'rare'
	| 'epic'
	| 'legendary'
	| 'mythic'
	| 'rainbow'