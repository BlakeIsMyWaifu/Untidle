import { Group, Text } from '@mantine/core'
import { FC } from 'react'
import { useSettingsStore } from 'state/useSettingsStore'

const DevSettingsStore: FC = () => {

	const { theme } = useSettingsStore()

	return (
		<Group m='sm'>
			<Text>Theme: {theme}</Text>
		</Group>
	)
}

export default DevSettingsStore