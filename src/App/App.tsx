import { AppShell, MantineProvider } from '@mantine/core'
import { FC, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from 'routes/AppRoutes'
import { useSettingsStore } from 'state/useSettingsStore'

import ActivityLoop from './ActivityLoop'
import AppNavbar from './AppNavbar'

const App: FC = () => {

	const theme = useSettingsStore(state => state.theme)

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
					navbar={<AppNavbar />}
					styles={theme => ({
						root: {
							backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
							color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]
						}
					})}
				>
					<Suspense>
						<AppRoutes />

						<ActivityLoop />
					</Suspense>
				</AppShell>
			</MantineProvider>
		</Router>
	)
}

export default App