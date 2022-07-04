import { Button, Image, Paper, Stack, Title } from '@mantine/core'
import { WildernessData } from 'data/combat/wildernessData'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface AreaProps {
	data: WildernessData;
}

const AreaButton: FC<AreaProps> = ({ data }) => {

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
					component={Link}
					to={`/combat/wilderness/${name}`}
				>
					Goto
				</Button>

			</Stack>
		</Paper>
	)
}

export default AreaButton