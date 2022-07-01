import { Autocomplete, Button, Group, NumberInput, Table, Text } from '@mantine/core'
import { SkillList, SubskillList } from 'data/skills/skills'
import { FC, Fragment, useRef, useState } from 'react'
import { Skill, useSkillStore } from 'state/useSkillStore'

const SkillSection: FC = () => {

	const { skills, addXp, resetSkill, totalLevel } = useSkillStore()

	const skillTableData = Object.entries(skills).map((skill, i) => {
		if (typeof skill[1] === 'function') return <Fragment key={i} />

		const [skillName, skillData]: [string, Skill] = skill

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
				onClick={() => resetSkill(skillName as SkillList)}
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
					data={Object.keys(skills)}
					limit={10}
					value={selectedSkill}
					onChange={setSelectedSkill}
				/>
				<Autocomplete
					ref={subskillRef}
					label='Subskill Name'
					placeholder='Subskill Name'
					data={Object.keys(skills[selectedSkill as SkillList] ?? {})}
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
						if (!Object.keys(skills).includes(selectedSkill)) return
						const skill = selectedSkill as SkillList
						if (!Object.keys(skills[skill]).includes(subskillRef.current?.value ?? '')) return
						addXp(+(amountRef.current?.value ?? 0), skill, subskillRef.current?.value as (SubskillList | undefined))
					}}
				>Add xp</Button>
			</Group>

			<Group m='sm'>
				<Text>Total Level: {totalLevel}</Text>
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

export default SkillSection