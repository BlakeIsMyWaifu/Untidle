import { Group, Image, Menu, UnstyledButton, createStyles } from '@mantine/core'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ChevronDown } from 'tabler-icons-react'

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
	control: {
		width: 200,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 15px',
		borderRadius: theme.radius.md,
		border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]}`,
		transition: 'background-color 150ms ease',
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[opened ? 5 : 6]
				: opened
					? theme.colors.gray[0]
					: theme.white,
		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]
		}
	},

	label: {
		fontWeight: 500,
		fontSize: theme.fontSizes.sm
	},

	icon: {
		transition: 'transform 150ms ease',
		transform: opened ? 'rotate(180deg)' : 'rotate(0deg)'
	}
}))

export interface DropdownData {
	label: string;
	image: string;
}

interface ImageDropdownProps {
	data: DropdownData[];
	selected: DropdownData | undefined;
	setSelected: Dispatch<SetStateAction<DropdownData | undefined>>;
}

const ImageDropdown: FC<ImageDropdownProps> = ({ data, selected, setSelected }) => {

	const [opened, setOpened] = useState(false)

	const { classes } = useStyles({ opened })

	const items = data.map(item => (
		<Menu.Item
			icon={<Image src={item.image} width={18} height={18} />}
			onClick={() => setSelected(item)}
			key={item.label}
		>
			{item.label}
		</Menu.Item>
	))

	return (
		<Menu
			transition='pop'
			transitionDuration={150}
			onOpen={() => setOpened(true)}
			onClose={() => setOpened(false)}
			radius='md'
			control={
				<UnstyledButton className={classes.control}>
					<Group spacing='xs'>
						<Image src={selected?.image ?? ''} width={22} height={22} />
						<span className={classes.label}>{selected?.label}</span>
					</Group>
					<ChevronDown size={16} className={classes.icon} />
				</UnstyledButton>
			}
		>
			{items}
		</Menu>
	)
}

export default ImageDropdown