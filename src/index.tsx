import './index.css'

import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App/App'

ReactDOM.createRoot((document.getElementById('root') as HTMLElement)).render(
	<StrictMode>
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<App />
		</MantineProvider>
	</StrictMode>
)