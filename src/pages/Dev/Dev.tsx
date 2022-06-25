import { Accordion, AccordionItem, Box, Title } from '@mantine/core'
import { FC } from 'react'
import { capitalise } from 'utils/capitalise'

import DevActivityStore from './DevActivityStore'
import DevItemStore from './DevItemStore'
import DevSettingsStore from './DevSettingsStore'
import DevSkillStore from './DevSkillStore'

const Dev: FC = () => {

	const stores: Record<string, FC> = {
		skill: DevSkillStore,
		settings: DevSettingsStore,
		item: DevItemStore,
		activity: DevActivityStore
	}

	return (
		<Box>
			<Title m='md'>Dev</Title>

			<Accordion multiple>

				{
					Object.entries(stores).map(([storeName, StoreElement]) => {
						return <AccordionItem key={storeName} label={capitalise(storeName)}>
							<StoreElement />
						</AccordionItem>
					})
				}

			</Accordion>

		</Box>
	)
}

export default Dev