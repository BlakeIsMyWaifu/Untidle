import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton, createStyles } from '@mantine/core'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'tabler-icons-react'

import { NavbarData, NavbarGroup, NavbarSingle } from './NavbarData'

const useStyles = createStyles(theme => ({
	control: {
		fontWeight: 500,
		display: 'block',
		width: '100%',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		fontSize: theme.fontSizes.sm,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black
		}
	},

	link: {
		fontWeight: 500,
		display: 'block',
		textDecoration: 'none',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		paddingLeft: 31,
		marginLeft: 30,
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black
		}
	},

	chevron: {
		transition: 'transform 200ms ease'
	}
}))

const IconAndLabel: FC<NavbarData> = ({ icon: Icon, label }) => {
	return <Box sx={{ display: 'flex', alignItems: 'center' }}>
		<ThemeIcon variant='light' size={30}>
			<Icon size={18} />
		</ThemeIcon>
		<Box ml='md'>{label}</Box>
	</Box>
}

const LinkSingle: FC<NavbarSingle> = ({ icon, label, link }) => {

	const { classes } = useStyles()

	return <UnstyledButton
		className={classes.control}
		component={Link}
		to={link}
	>
		<IconAndLabel icon={icon} label={label} />
	</UnstyledButton>
}

const LinkGroup: FC<NavbarGroup> = ({ icon, label, initiallyOpened, links }) => {

	const { classes } = useStyles()

	const [opened, setOpened] = useState(initiallyOpened)

	return (
		<>
			<UnstyledButton
				className={classes.control}
				onClick={() => setOpened(state => !state)}
			>
				<Group position='apart' spacing={0}>
					<IconAndLabel icon={icon} label={label} />
					<ChevronRight
						className={classes.chevron}
						size={14}
						style={{
							transform: opened ? 'rotate(90deg)' : 'none'
						}}
					/>
				</Group >
			</UnstyledButton>

			<Collapse in={opened}>
				{
					links.map(({ label, link }) => {
						return <Text
							key={label}
							className={classes.link}
							component={Link}
							to={link}
						>
							{label}
						</Text>
					})
				}
			</Collapse>
		</>
	)
}

const NavbarLink: FC<NavbarSingle | NavbarGroup> = data => {

	const isSingle = (data: NavbarSingle | NavbarGroup): data is NavbarSingle => {
		return Object.prototype.hasOwnProperty.call(data, 'link')
	}

	return isSingle(data) ? <LinkSingle {...data} /> : <LinkGroup {...data} />
}

export default NavbarLink