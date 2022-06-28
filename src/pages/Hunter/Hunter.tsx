import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Assassination from './Assassination'
import Marksman from './Marksman'

const Sorcery: FC = () => {
	return (
		<Box>
			<Title order={2}>Hunter</Title>

			<SkillCards skill='hunter' subskills={{
				main: Hammer,
				marksman: Hammer,
				assassination: Hammer
			}} />

			<Marksman />

			<Assassination />
		</Box>
	)
}

export default Sorcery