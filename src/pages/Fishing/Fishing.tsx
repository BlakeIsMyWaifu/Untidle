import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

const Fishing: FC = () => {
	return (
		<Box>
			<Title order={2}>Fishing</Title>

			<SkillCards skill='fishing' subskills={{
				main: Hammer
			}} />
		</Box>
	)
}

export default Fishing