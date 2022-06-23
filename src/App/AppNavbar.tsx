import { Button, Navbar } from '@mantine/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const AppNavbar: FC = () => {

	const skills = [
		'Agriculture',
		'Alchemy',
		'Arcane',
		'Architecture',
		'Artificer',
		'Astronomy',
		'Culinary',
		'Dungeoneering',
		'Excavation',
		'Fishing',
		'Mining',
		'Smithing',
		'Survivalism'
	]

	return (
		<Navbar
			width={{ base: 300 }}
			p='xs'
			style={{
				gap: '6px'
			}}>
			{
				skills.map(skill => {
					return <Link key={skill} to={`/${skill.toLowerCase()}`}>
						<Button
							variant='default'
							fullWidth
						>{skill}</Button>
					</Link>
				})
			}
		</Navbar>
	)
}

export default AppNavbar