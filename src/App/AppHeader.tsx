import { ActionIcon, Anchor, Box, Burger, CSSObject, Group, Header, MantineTheme, Text, Title } from '@mantine/core'
import { Dispatch, FC, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { useSettingsStore } from 'state/useSettingsStore'
import { MoonStars, Sun } from 'tabler-icons-react'
import { isDev } from 'utils/isDev'

interface AppHeaderProps {
	navbarOpened: boolean;
	setNavbarOpened: Dispatch<SetStateAction<boolean>>;
}

const AppHeader: FC<AppHeaderProps> = ({ navbarOpened, setNavbarOpened }) => {

	const { theme, toggleTheme } = useSettingsStore()

	const anchorStyle = (theme: MantineTheme): CSSObject => ({
		color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8],
		'&:hover': {
			textDecoration: 'none'
		}
	})

	return (
		<Header
			fixed
			height={60}
			p='xs'
		>
			<Group position='apart'>

				<Group>
					<Burger
						opened={navbarOpened}
						onClick={() => setNavbarOpened(state => !state)}
					/>
					<Anchor component={Link} to='/' sx={anchorStyle}>
						<Title>
							Untidle
						</Title>
					</Anchor>
				</Group>

				<Group>
					{
						isDev() && <Box>
							<Anchor component={Link} to='/dev' sx={anchorStyle}>
								<Text>Dev</Text>
							</Anchor>
						</Box>
					}
					<ActionIcon variant='default' onClick={() => toggleTheme()} size={30}>
						{theme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
					</ActionIcon>
				</Group>

			</Group>
		</Header>
	)
}

export default AppHeader