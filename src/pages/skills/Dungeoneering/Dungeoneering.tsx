import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

const Dungeoneering: FC = () => {
	return (
		<Box>
			<Title order={2}>Dungeoneering</Title>

			<SkillCards skill='dungeoneering' subskills={{
				main: Hammer
			}} />
		</Box>
	)
}

export default Dungeoneering