import { Accordion, AccordionItem, Autocomplete, Box, Button, Group, NumberInput, Table, Title } from '@mantine/core'
import { FC, useState } from 'react'
import { useRef } from 'react'
import { Skill, SkillList, initialSkillState, useSkillStore } from 'state/useSkillStore'

const Dev: FC = () => {

	const skillStore = useSkillStore()

	const skillTableData = Object.entries(skillStore).map(skill => {
		if (typeof skill[1] === 'function') return <></>

		const [skillName, skillData]: [string, Skill<string>] = skill

		let subskills = Object.entries(skillData).map(([subskillName, subskillData]) => {
			return <>
				<td>{subskillName === 'main' ? skillName : subskillName}</td>
				<td>{subskillData.level}</td>
				<td>{subskillData.xp}</td>
				<td>{subskillData.xpNeeded}</td>
			</>
		})
		subskills.length = 4
		subskills = subskills.fill(<><td /><td /><td /><td /></>, Object.keys(skillData).length)

		return <tr key={skillName}>
			{subskills}
			<td><Button
				compact
				size='xs'
				color='gray'
				onClick={() => skillStore.resetSkill(skillName as SkillList)}
			>Reset</Button></td>
		</tr>
	})

	const [selectedSkill, setSelectedSkill] = useState('')

	const subskillRef = useRef<HTMLInputElement>(null)
	const amountRef = useRef<HTMLInputElement>(null)

	return (
		<Box>
			<Title m='md'>Dev</Title>

			<Accordion multiple>
				<AccordionItem label='Skill'>

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
							color='gray'
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
									Array(4).fill(<>
										<th>Name</th>
										<th>level</th>
										<th>xp</th>
										<th>needed</th>
									</>)
								}
								<th>Reset</th>
							</tr>
						</thead>
						<tbody>{skillTableData}</tbody>
					</Table>
				</AccordionItem>
			</Accordion>

		</Box>
	)
}

export default Dev