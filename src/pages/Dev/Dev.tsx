import { Accordion, AccordionItem, Box, Title } from '@mantine/core'
import { FC } from 'react'

import DevSettingsStore from './DevSettingsStore'
import DevSkillStore from './DevSkillStore'

const Dev: FC = () => {
	return (
		<Box>
			<Title m='md'>Dev</Title>

			<Accordion multiple>

				<AccordionItem label='Skill'>
					<DevSkillStore />
				</AccordionItem>

				<AccordionItem label='Settings'>
					<DevSettingsStore />
				</AccordionItem>

			</Accordion>

		</Box>
	)
}

export default Dev