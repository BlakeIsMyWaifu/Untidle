import { Box, Button, Navbar } from '@mantine/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface AppNavbarProps {
	navbarOpened: boolean;
}

const AppNavbar: FC<AppNavbarProps> = ({ navbarOpened }) => {

	const skills = [
		'Storage', // TODO Add sections on the navbar
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
		'Hunter',
		'Mining',
		'Slayer',
		'Smithing',
		'Sorcery',
		'Strength',
		'Survival'
	]

	return (
		<>
			<Navbar
				fixed
				position={{ top: 0, left: 0 }}
				width={{ sm: navbarOpened ? 300 : 0 }}
				p={navbarOpened ? 'sm' : 0}
				sx={{
					gap: '6px',
					overflow: 'hidden',
					transition: 'width 200ms ease, min-width 200ms ease'
				}}>
				{
					skills.map(skill => <Button
						key={skill}
						component={Link}
						to={`/${skill.toLowerCase()}`}
						variant='default'
					>{skill}</Button>)
				}
			</Navbar>
			<Box style={{
				width: navbarOpened ? '300px' : 0,
				height: '100vh',
				transition: 'width 200ms ease, min-width 200ms ease'
			}} />
		</>
	)
}

export default AppNavbar