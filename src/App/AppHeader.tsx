import { Header, Title } from '@mantine/core'
import { FC } from 'react'

const AppHeader: FC = () => {
	return (
		<Header height={60} p='xs'>
			<Title style={{
				color: 'white'
			}}>
				Untidle
			</Title>
		</Header>
	)
}

export default AppHeader