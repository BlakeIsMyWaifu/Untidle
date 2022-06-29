export interface Skills {
	agriculture: ['farming', 'horticulture', 'ranching'];
	alchemy: ['buffs', 'healing', 'debuffs'];
	arcane: ['runecrafting', 'summoning', 'enchanting'];
	architecture: ['masonry', 'guilds', 'carpentry'];
	artificer: ['crafting', 'jewelcrafting', 'fletching'];
	astronomy: ['stargazing', 'devotion'];
	culinary: [];
	dungeoneering: [];
	excavation: ['digging', 'archeology'];
	fishing: [];
	hunter: ['marksman', 'assassination'];
	mining: ['quarrying', 'spelunking'];
	slayer: [];
	smithing: ['metallurgy', 'armoury', 'weaponry'];
	sorcery: ['elemental', 'chaos'];
	strength: ['berserker', 'guardian'];
	survival: ['woodcutting', 'firemaking', 'foraging'];
}

export type SkillList = keyof Skills

export type Subskills<T extends SkillList> = Skills[T][number] | 'main'

export type SubskillList = Skills[SkillList][number] | 'main'