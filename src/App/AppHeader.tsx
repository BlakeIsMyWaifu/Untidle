import { Anchor, Box, Group, Header, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { isDev } from 'utils/isDev'

const AppHeader: FC = () => {
	return (
		<Header height={60} p='xs'>
			<Group position='apart'>

				<Anchor component={Link} to='/'>
					<Title style={{
						color: 'white'
					}}>
						Untidle
					</Title>
				</Anchor>

				{
					isDev() && <Box>
						<Anchor component={Link} to='/dev'>
							<Text style={{
								color: 'white'
							}}>Dev</Text>
						</Anchor>
					</Box>
				}

			</Group>
		</Header>
	)
}

export default AppHeader