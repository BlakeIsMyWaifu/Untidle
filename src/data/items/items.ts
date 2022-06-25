export interface Item {
	name: string;
	image: string;
	rarity: Rarity;
}

type Rarity =
	| 'common'
	| 'rare'
	| 'epic'
	| 'legendary'
	| 'mythic'
	| 'rainbow'