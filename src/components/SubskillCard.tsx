import { Badge, Group, Paper, Progress, Text, ThemeIcon, createStyles } from '@mantine/core'
import { SkillList, Subskills } from 'data/skills/skills'
import { useSkillStore } from 'state/useSkillStore'
import { Icon } from 'tabler-icons-react'
import { round } from 'utils/maths'

const iconSize = 60

const useStyles = createStyles(theme => ({
	card: {
		position: 'relative',
		overflow: 'visible',
		padding: theme.spacing.xl,
		paddingTop: theme.spacing.xl * 1.5 + iconSize / 3,
		width: '20%'
	},

	icon: {
		position: 'absolute',
		top: -iconSize / 3,
		left: `calc(50% - ${iconSize / 2}px)`
	},

	title: {
		lineHeight: 1
	}
}))

interface SkillCardProps<T extends SkillList> {
	skillName: T;
	subskillName: Subskills<T> | 'main';
	icon: Icon;
}

const SubskillCard = <T extends SkillList,>({ skillName, subskillName, icon: Icon }: SkillCardProps<T>): JSX.Element | null => {

	const { classes } = useStyles()

	const skillData = useSkillStore(state => state.skills[skillName])[subskillName]
	if (!skillData) return null
	const { xp, level, xpNeeded } = skillData

	// If this isn't cast as string it causes problems with being in text
	const name: string = subskillName === 'main' ? skillName : subskillName

	return (
		<Paper
			withBorder
			radius='md'
			mt={iconSize / 3}
			className={classes.card}
		>
			<ThemeIcon
				size={iconSize}
				radius={iconSize}
				className={classes.icon}
			>
				<Icon size={42} />
			</ThemeIcon>

			<Text
				align='center'
				weight={700}
				className={classes.title}
				transform={'capitalize'}
			>
				{name}
			</Text>

			<Text
				color='dimmed'
				align='center'
				size='sm'
			>
				Level {level}
			</Text>

			<Group position='apart' mt='xs'>
				<Text size='sm' color='dimmed'>
					Progress
				</Text>
				<Text size='sm' color='dimmed'>
					{round((xp / xpNeeded) * 100, 1)}%
				</Text>
			</Group>

			<Progress value={(xp / xpNeeded) * 100} mt={5} />

			<Group position='apart' mt='md'>
				<Text size='sm'>{xp} / {xpNeeded} xp</Text>
				<Badge size='sm' color='green'>Unlocked</Badge>
			</Group>
		</Paper>
	)
}

export default SubskillCard