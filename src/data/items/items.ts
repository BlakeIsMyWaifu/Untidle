export interface Item {
	name: string;
	image: string;
	type: ItemType;
	rarity: Rarity;
}

export type ItemType = 'material' | 'equipment'

export type Rarity =
	| 'common'
	| 'rare'
	| 'epic'
	| 'legendary'
	| 'mythic'
	| 'rainbow'