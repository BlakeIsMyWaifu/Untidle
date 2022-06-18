import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { FC } from 'react'

interface ActivityProps {
	name: string;
	unlocked: boolean;
}

const Activity: FC<ActivityProps> = ({ name, unlocked }) => {
	return (
		<Card shadow='sm' p='lg' m='lg' sx={{
			width: 'fit-content'
		}}>

			<Image
				src='assets/temp_tree.png'
				alt={name}
				width={170}
			/>

			<Group position='apart' m='sm'>
				<Text>{name}</Text>
				<Badge color={unlocked ? 'green' : 'pink'}>
					{unlocked ? 'Unlocked' : 'Locked'}
				</Badge>
			</Group>

			<Button
				variant='light'
				color='green'
				disabled={!unlocked}
				fullWidth
			>
				Start Activity
			</Button>

		</Card>
	)
}

export default Activity