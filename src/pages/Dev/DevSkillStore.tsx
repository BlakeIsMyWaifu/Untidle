import { Autocomplete, Button, Group, NumberInput, Table } from '@mantine/core'
import { FC, Fragment, useRef, useState } from 'react'
import { Skill, SkillList, initialSkillState, useSkillStore } from 'state/useSkillStore'

const DevSkillStore: FC = () => {

	const skillStore = useSkillStore()

	const skillTableData = Object.entries(skillStore).map((skill, i) => {
		if (typeof skill[1] === 'function') return <Fragment key={i} />

		const [skillName, skillData]: [string, Skill<string>] = skill

		const subskills = Object.entries(skillData).map(([subskillName, subskillData], i) => {
			return <Fragment key={i}>
				<td>{subskillName === 'main' ? skillName : subskillName}</td>
				<td>{subskillData.level}</td>
				<td>{subskillData.xp}</td>
				<td>{subskillData.xpNeeded}</td>
			</Fragment>
		})
		subskills.length = 4
		const subskillsTable = Array.from(subskills, (jsx, i) => jsx ? jsx : <Fragment key={i}><td /><td /><td /><td /></Fragment>)

		return <tr key={skillName}>
			{subskillsTable}
			<td><Button
				compact
				size='xs'
				variant='default'
				onClick={() => skillStore.resetSkill(skillName as SkillList)}
			>Reset</Button></td>
		</tr>
	})

	const [selectedSkill, setSelectedSkill] = useState('')

	const subskillRef = useRef<HTMLInputElement>(null)
	const amountRef = useRef<HTMLInputElement>(null)

	return (
		<>

			<Group p='md' align='end'>
				<Autocomplete
					label='Skill Name'
					placeholder='Skill Name'
					data={Object.keys(initialSkillState)}
					limit={10}
					value={selectedSkill}
					onChange={setSelectedSkill}
				/>
				<Autocomplete
					ref={subskillRef}
					label='Subskill Name'
					placeholder='Subskill Name'
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					data={Object.keys((skillStore as Record<string, any>)[selectedSkill] ?? {})}
					limit={4}
				/>
				<NumberInput
					ref={amountRef}
					label='Amount'
					placeholder='Amount'
					min={0}
					step={100}
				/>
				<Button
					variant='default'
					onClick={() => {
						if (!Object.keys(skillStore).includes(selectedSkill)) return
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						if (!Object.keys((skillStore as Record<string, any>)[selectedSkill] ?? {}).includes(subskillRef.current?.value ?? '')) return
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						skillStore.addXp(+(amountRef.current?.value ?? 0), selectedSkill as any, subskillRef.current?.value)
					}}
				>Add xp</Button>
			</Group>

			<Table highlightOnHover>
				<thead>
					<tr>
						{
							Array.from({ length: 4 }, (_, i) => <Fragment key={i}>
								<th>Name</th>
								<th>level</th>
								<th>xp</th>
								<th>needed</th>
							</Fragment>)
						}
						<th>Reset</th>
					</tr>
				</thead>
				<tbody>{skillTableData}</tbody>
			</Table>
		</>
	)
}

export default DevSkillStore