import { Box, Title } from '@mantine/core'
import SkillCards from 'components/SkillCards'
import { FC } from 'react'
import { Hammer } from 'tabler-icons-react'

const Culinary: FC = () => {
	return (
		<Box>
			<Title order={2}>Culinary</Title>

			<SkillCards skill='culinary' subskills={{
				main: Hammer
			}} />
		</Box>
	)
}

export default Culinary