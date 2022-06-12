import { AppShell } from '@mantine/core'
import { FC } from 'react'

import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'

const App: FC = () => {
	return (
		<AppShell
			padding='md'
			header={<AppHeader />}
			navbar={<AppNavbar />}
			styles={theme => ({
				main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
			})}
		>
			{ }
		</AppShell>
	)
}

export default App