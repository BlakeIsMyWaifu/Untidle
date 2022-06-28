import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Quarrying from './Quarrying'
import Spelunking from './Spelunking'

const Mining: FC = () => {
	return (
		<Box>
			<Title order={2}>Mining</Title>

			<SkillCards skill='mining' subskills={{
				main: Hammer,
				quarrying: Hammer,
				spelunking: Hammer
			}} />

			<Quarrying />

			<Spelunking />
		</Box>
	)
}

export default Mining