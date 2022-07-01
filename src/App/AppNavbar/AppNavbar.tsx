import { ActionIcon, Box, Group, Navbar, ScrollArea, Title, createStyles } from '@mantine/core'
import { FC } from 'react'
import { useSettingsStore } from 'state/useSettingsStore'
import { MoonStars, Sun } from 'tabler-icons-react'

import { navbarData } from './NavbarData'
import NavbarLink from './NavbarLink'

const useStyles = createStyles(theme => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
		width: '250px',
		position: 'sticky',
		top: 0,
		left: 0
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`
	},

	links: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl
	}
}))

const AppNavbar: FC = () => {

	const { classes } = useStyles()

	const { theme, toggleTheme } = useSettingsStore()

	return (
		<Navbar p='md' className={classes.navbar}>

			<Navbar.Section className={classes.header}>
				<Group position='apart' align='end'>
					<Title order={2}>Untidle</Title>
					<ActionIcon
						variant='default'
						size={30}
						onClick={() => toggleTheme()}
					>
						{
							theme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />
						}
					</ActionIcon>
				</Group>
			</Navbar.Section>

			<Navbar.Section
				grow
				className={classes.links}
				component={ScrollArea}
			>
				<Box className={classes.linksInner}>
					{
						navbarData.map(item => {
							return <NavbarLink {...item} key={item.label} />
						})
					}
				</Box>
			</Navbar.Section>
		</Navbar>
	)
}

export default AppNavbar