import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Armoury from './Armoury'
import Metallurgy from './Metallurgy'
import Weaponry from './Weaponry'

const Smithing: FC = () => {
	return (
		<Box>
			<Title order={2}>Smithing</Title>

			<SkillCards skill='smithing' subskills={{
				main: Hammer,
				metallurgy: Hammer,
				armoury: Hammer,
				weaponry: Hammer
			}} />

			<Metallurgy />

			<Armoury />

			<Weaponry />
		</Box>
	)
}

export default Smithing