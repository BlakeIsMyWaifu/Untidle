import { AppShell, Box, MantineProvider } from '@mantine/core'
import { FC, Suspense, useState } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from 'routes/AppRoutes'
import { useSettingsStore } from 'state/useSettingsStore'

import ActivityLoop from './ActivityLoop'
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'

const App: FC = () => {

	const theme = useSettingsStore(state => state.theme)
	const [navbarOpened, setNavbarOpened] = useState(true)

	return (
		<Router>
			<MantineProvider
				withNormalizeCSS
				withGlobalStyles
				theme={{
					colorScheme: theme
				}}
			>
				<AppShell
					padding='md'
					header={<AppHeader navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />}
					navbar={<AppNavbar navbarOpened={navbarOpened} />}
					styles={theme => ({
						root: {
							backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
							color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]
						}
					})}
				>
					<Suspense>
						<Box style={{
							paddingTop: '60px'
						}}>
							<AppRoutes />

							<ActivityLoop />
						</Box>
					</Suspense>
				</AppShell>
			</MantineProvider>
		</Router>
	)
}

export default App