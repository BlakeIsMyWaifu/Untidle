import { Adjustments, BuildingStore, Home, Icon, Lock, Notes, Sword } from 'tabler-icons-react'
import { isDev } from 'utils/isDev'

export interface NavbarData {
	label: string;
	icon: Icon;
}

export interface NavbarSingle extends NavbarData {
	link: string;
}

export interface NavbarGroup extends NavbarData {
	initiallyOpened: boolean;
	links: NavbarLink[];
}

interface NavbarLink {
	label: string;
	link: string;
}

export const navbarData: (NavbarSingle | NavbarGroup)[] = [
	{
		label: 'Home',
		icon: Home,
		link: '/'
	},
	{
		label: 'Combat',
		icon: Sword,
		link: '/'
	},
	{
		label: 'Skills',
		icon: Notes,
		initiallyOpened: false,
		links: [
			{ label: 'Agriculture', link: '/agriculture' },
			{ label: 'Alchemy', link: '/alchemy' },
			{ label: 'Arcane', link: '/arcane' },
			{ label: 'Architecture', link: '/architecture' },
			{ label: 'Artificer', link: '/artificer' },
			{ label: 'Astronomy', link: '/astronomy' },
			{ label: 'Culinary', link: '/culinary' },
			{ label: 'Dungeoneering', link: '/dungeoneering' },
			{ label: 'Excavation', link: '/excavation' },
			{ label: 'Fishing', link: '/fishing' },
			{ label: 'Hunter', link: '/hunter' },
			{ label: 'Mining', link: '/mining' },
			{ label: 'Slayer', link: '/slayer' },
			{ label: 'Smithing', link: '/smithing' },
			{ label: 'Sorcery', link: '/sorcery' },
			{ label: 'Strength', link: '/strength' },
			{ label: 'Survival', link: '/survival' }
		]
	},
	{
		label: 'Buildings',
		icon: BuildingStore,
		initiallyOpened: false,
		links: [
			{ label: 'Storage', link: '/storage' }
		]
	},
	{
		label: 'Settings',
		icon: Adjustments,
		link: '/'
	}
]

if (isDev()) {
	navbarData.push({
		label: 'Dev',
		icon: Lock,
		link: '/dev'
	})
}