import { Image, Paper, Stack, Title } from '@mantine/core'
import { FC, useContext } from 'react'

import { FightContext } from './FightState'

const Enemy: FC = () => {

	const { state } = useContext(FightContext)

	if (!state.enemy) return null

	const { name, image } = state.enemy

	return (
		<Paper p='md' style={{
			width: '100%'
		}}>
			<Stack align='center'>
				<Title style={{
					textTransform: 'capitalize'
				}}>{name}</Title>

				<Image
					src={`assets/combat/enemy/${image}.png`}
					style={{
						width: '80%'
					}}
				/>
			</Stack>
		</Paper>
	)
}

export default Enemy