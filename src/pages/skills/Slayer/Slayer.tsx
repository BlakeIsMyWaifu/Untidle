import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

const Slayer: FC = () => {
	return (
		<Box>
			<Title order={2}>Slayer</Title>

			<SkillCards skill='slayer' subskills={{
				main: Hammer
			}} />
		</Box>
	)
}

export default Slayer