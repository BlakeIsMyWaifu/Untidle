export interface Skills {
	agriculture: ['farming', 'horticulture', 'ranching'];
	alchemy: ['buffs', 'healing', 'debuffs'];
	arcane: ['runecrafting', 'summoning', 'enchanting'];
	architecture: ['masonry', 'guilds', 'carpentry'];
	artificer: ['crafting', 'fletching'];
	astronomy: ['stargazing', 'devotion'];
	culinary: [];
	dungeoneering: [];
	excavation: ['digging', 'archeology'];
	fishing: [];
	hunter: ['marksman', 'assassination'];
	mining: ['quarrying', 'spelunking'];
	slayer: [];
	smithing: ['armoury', 'jewelcrafting', 'weaponry'];
	sorcery: ['elemental', 'chaos'];
	strength: ['berserker', 'guardian'];
	survival: ['woodcutting', 'firemaking', 'foraging'];
}

export const skills: Skills = {
	agriculture: ['farming', 'horticulture', 'ranching'],
	alchemy: ['buffs', 'healing', 'debuffs'],
	arcane: ['runecrafting', 'summoning', 'enchanting'],
	architecture: ['masonry', 'guilds', 'carpentry'],
	artificer: ['crafting', 'fletching'],
	astronomy: ['stargazing', 'devotion'],
	culinary: [],
	dungeoneering: [],
	excavation: ['digging', 'archeology'],
	fishing: [],
	hunter: ['marksman', 'assassination'],
	mining: ['quarrying', 'spelunking'],
	slayer: [],
	smithing: ['armoury', 'jewelcrafting', 'weaponry'],
	sorcery: ['elemental', 'chaos'],
	strength: ['berserker', 'guardian'],
	survival: ['woodcutting', 'firemaking', 'foraging']
}

export type SkillList = keyof Skills

export type SubskillList<T extends SkillList> = Skills[T][number]