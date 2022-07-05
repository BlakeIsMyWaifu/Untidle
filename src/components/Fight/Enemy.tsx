import { Image, Paper, Stack, Title } from '@mantine/core'
import { EnemyData } from 'data/combat/enemyData'
import { FC } from 'react'

interface EnemyProps {
	data: EnemyData;
}

const Enemy: FC<EnemyProps> = ({ data }) => {

	const { name, image } = data

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