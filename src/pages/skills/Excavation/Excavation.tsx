import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Archeology from './Archeology'
import Digging from './Digging'

const Excavation: FC = () => {
	return (
		<Box>
			<Title order={2}>Excavation</Title>

			<SkillCards skill='excavation' subskills={{
				main: Hammer,
				digging: Hammer,
				archeology: Hammer
			}} />

			<Digging />

			<Archeology />
		</Box>
	)
}

export default Excavation