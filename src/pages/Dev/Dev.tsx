import { Accordion, Box, Title } from '@mantine/core'
import { FC } from 'react'
import { capitalise } from 'utils/capitalise'

import ActivitySection from './ActivitySection'
import ArchitectureSection from './ArchitectureSection'
import GoldSection from './GoldSection'
import ItemSection from './ItemSection/ItemSection'
import SettingsSection from './SettingsSection'
import SkillSection from './SkillSection'

const stores: Record<string, FC> = {
	skill: SkillSection,
	settings: SettingsSection,
	item: ItemSection,
	activity: ActivitySection,
	architecture: ArchitectureSection,
	gold: GoldSection
}

const Dev: FC = () => {
	return (
		<Box>
			<Title m='md'>Dev</Title>

			<Accordion multiple variant='separated'>
				{
					Object.entries(stores).map(([storeName, StoreElement]) => {
						return <Accordion.Item key={storeName} value={storeName}>
							<Accordion.Control>{capitalise(storeName)}</Accordion.Control>
							<Accordion.Panel>
								<StoreElement />
							</Accordion.Panel>
						</Accordion.Item>
					})
				}
			</Accordion>
		</Box>
	)
}

export default Dev