import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Backhoe, Brush, Shovel } from 'tabler-icons-react'

import Archeology from './Archeology'
import Digging from './Digging'

const Excavation: FC = () => {
	return (
		<Box>
			<Title order={2}>Excavation</Title>

			<SkillCards skill='excavation' subskills={{
				main: Backhoe,
				digging: Shovel,
				archeology: Brush
			}} />

			<Digging />

			<Archeology />
		</Box>
	)
}

export default Excavation