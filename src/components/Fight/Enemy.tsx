import { Image, Paper, Stack, Title } from '@mantine/core'
import { FC } from 'react'
import { useFightStore } from 'state/useFightStore'

const Enemy: FC = () => {

	const enemy = useFightStore(state => state.enemy)

	if (!enemy) return null

	const { name, image } = enemy

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
						width: '70%'
					}}
				/>
			</Stack>
		</Paper>
	)
}

export default Enemy