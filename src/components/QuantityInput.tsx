import { ActionIcon, NumberInput, NumberInputHandlers, createStyles } from '@mantine/core'
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { Minus, Plus } from 'tabler-icons-react'

const useStyles = createStyles(theme => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: `6px ${theme.spacing.xs}px`,
		borderRadius: theme.radius.sm,
		border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

		'&:focus-within': {
			borderColor: theme.colors[theme.primaryColor]?.[6] ?? ''
		}
	},

	control: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,

		'&:disabled': {
			borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
			opacity: 0.8,
			backgroundColor: 'transparent'
		}
	},

	input: {
		textAlign: 'center',
		paddingRight: `${theme.spacing.sm}px !important`,
		paddingLeft: `${theme.spacing.sm}px !important`,
		height: 28,
		flex: 1
	}
}))

interface QuantityInputProps {
	min?: number;
	max?: number;
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
}

const QuantityInput: FC<QuantityInputProps> = ({ min = 1, max = 10, value, setValue }) => {

	const { classes } = useStyles()

	const handlersRef = useRef<NumberInputHandlers>()

	useEffect(() => {
		if (value >= max) {
			setValue(max)
		} else if (value <= min) {
			setValue(min)
		}
	}, [min, max, value, setValue])

	return (
		<div className={classes.wrapper}>
			<ActionIcon<'button'>
				size={28}
				variant='transparent'
				onClick={() => handlersRef.current?.decrement()}
				disabled={value === min}
				className={classes.control}
				onMouseDown={event => event.preventDefault()}
			>
				<Minus size={16} />
			</ActionIcon>

			<NumberInput
				variant='unstyled'
				min={min}
				max={max}
				handlersRef={handlersRef}
				value={value}
				onChange={event => setValue(event ?? 1)}
				classNames={{ input: classes.input }}
			/>

			<ActionIcon<'button'>
				size={28}
				variant='transparent'
				onClick={() => handlersRef.current?.increment()}
				disabled={value === max}
				className={classes.control}
				onMouseDown={event => event.preventDefault()}
			>
				<Plus size={16} />
			</ActionIcon>
		</div>
	)
}

export default QuantityInput