import { Badge, Group, Paper, Progress, Text, ThemeIcon, createStyles } from '@mantine/core'
import { SkillList, SubskillList } from 'data/skills'
import { FC, SVGAttributes } from 'react'
import { SkillStats, useSkillStore } from 'state/useSkillStore'
import { capitalise } from 'utils/capitalise'
import { round } from 'utils/round'

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

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
}

interface SkillCardProps<T extends SkillList> {
	skillName: T;
	subskillName: SubskillList<T> | 'main';
	Icon: FC<IconProps>;
}

const SkillCard = <T extends SkillList,>({ skillName, subskillName, Icon }: SkillCardProps<T>): JSX.Element => {

	const { classes } = useStyles()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const skillData: SkillStats = useSkillStore(state => (state[skillName] as any)[subskillName])
	const { xp, level, xpNeeded } = skillData

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
			>
				{capitalise(subskillName === 'main' ? skillName : subskillName)}
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

export default SkillCard