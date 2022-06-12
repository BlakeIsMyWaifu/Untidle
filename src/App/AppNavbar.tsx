import { Button, Navbar } from '@mantine/core'
import { FC } from 'react'

const AppNavbar: FC = () => {

	const skills = [
		'Mining',
		'Farming',
		'Woodcutting',
		'Combat',
		'Enchanting',
		'Alchemy',
		'Excavation',
		'Fishing',
		'Cooking',
		'Smithing',
		'Artificer',
		'Runecrafting',
		'Summoning',
		'Astronomy'
	]

	return (
		<Navbar width={{ base: 300 }} p='xs' style={{
			gap: '6px'
		}}>
			{
				skills.map(skill => {
					return <Button key={skill} variant='default'>{skill}</Button>
				})
			}
		</Navbar>
	)
}

export default AppNavbar