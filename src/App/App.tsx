import { AppShell } from '@mantine/core'
import { FC, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import AppRoutes from 'routes/AppRoutes'

import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'

const App: FC = () => {
	return (
		<Router>
			<AppShell
				padding='md'
				header={<AppHeader />}
				navbar={<AppNavbar />}
				styles={theme => ({
					main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
				})}
			>
				<Suspense>
					<AppRoutes />
				</Suspense>
			</AppShell>
		</Router>
	)
}

export default App