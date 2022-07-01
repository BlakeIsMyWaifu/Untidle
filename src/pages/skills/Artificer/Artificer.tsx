import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

import Crafting from './Crafting'
import Fletching from './Fletching'
import Jewelcrafting from './Jewelcrafting'

const Artificer: FC = () => {
	return (
		<Box>
			<Title order={2}>Artificer</Title>

			<SkillCards skill='artificer' subskills={{
				main: Hammer,
				crafting: Hammer,
				jewelcrafting: Hammer,
				fletching: Hammer
			}} />

			<Crafting />

			<Jewelcrafting />

			<Fletching />
		</Box>
	)
}

export default Artificer