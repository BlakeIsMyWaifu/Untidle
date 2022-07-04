import { Button, Image, Paper, Stack, Title } from '@mantine/core'
import { WildernessData } from 'data/combat/wildernessData'
import { FC } from 'react'

interface AreaProps {
	data: WildernessData;
}

const Area: FC<AreaProps> = ({ data }) => {

	const { name, image } = data

	return (
		<Paper p='md'>
			<Stack spacing='xs' align='center'>

				<Title order={4} style={{
					textTransform: 'capitalize'
				}}>{name}</Title>

				<Image src={`assets/combat/wilderness/${image}.png`} />

				<Button
					fullWidth
					variant='light'
					color='green'
				>
					Goto
				</Button>

			</Stack>
		</Paper>
	)
}

export default Area