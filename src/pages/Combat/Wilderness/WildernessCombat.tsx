import { Box, Button, Group, Title } from '@mantine/core'
import Fight from 'components/Fight'
import { wildernessData } from 'data/combat/wildernessData'
import { FC } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const WildernessCombat: FC = () => {

	const { area } = useParams()
	const data = wildernessData[area ?? '']
	if (!data) return null
	const { name } = data

	return (
		<Box>
			<Group position='apart' p='md'>
				<Title style={{
					textTransform: 'capitalize'
				}}>{name}</Title>

				<Button
					variant='default'
					component={Link}
					to='/combat'
				>
					Go Back
				</Button>
			</Group>

			<Fight />
		</Box>
	)
}

export default WildernessCombat