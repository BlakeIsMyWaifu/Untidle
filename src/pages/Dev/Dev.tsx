import { Accordion, AccordionItem, Box, Title } from '@mantine/core'
import { FC } from 'react'
import { capitalise } from 'utils/capitalise'

import ActivitySection from './ActivitySection'
import ArchitectureSection from './ArchitectureSection'
import GoldSection from './GoldSection'
import ItemSection from './ItemSection/ItemSection'
import SettingsSection from './SettingsSection'
import SkillSection from './SkillSection'

const Dev: FC = () => {

	const stores: Record<string, FC> = {
		skill: SkillSection,
		settings: SettingsSection,
		item: ItemSection,
		activity: ActivitySection,
		architecture: ArchitectureSection,
		gold: GoldSection
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