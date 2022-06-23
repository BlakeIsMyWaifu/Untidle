import { ActionIcon, Anchor, Box, CSSObject, Group, Header, MantineTheme, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSettingsStore } from 'state/useSettingsStore'
import { MoonStars, Sun } from 'tabler-icons-react'
import { isDev } from 'utils/isDev'

const AppHeader: FC = () => {

	const { theme, toggleTheme } = useSettingsStore()

	const anchorStyle = (theme: MantineTheme): CSSObject => ({
		color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8],
		'&:hover': {
			textDecoration: 'none'
		}
	})

	return (
		<Header height={60} p='xs' >
			<Group position='apart'>

				<Anchor component={Link} to='/' sx={anchorStyle}>
					<Title>
						Untidle
					</Title>
				</Anchor>

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