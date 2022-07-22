import { Input, Progress } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { FC, useEffect, useMemo, useState } from 'react'

interface ProgressBarProps {
	time: number;
	label?: string;
	onComplete?: () => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ time, label, onComplete }) => {

	const [value, setValue] = useState(0)

	const incrementor = useMemo(() => 100 / (time / 100), [time])

	const { start, stop } = useInterval(() => {
		setValue(prev => prev + incrementor)
	}, 100)

	useEffect(() => {
		start()
		return stop
	}, [start, stop, time])

	useEffect(() => {
		if (value >= 100) {
			setValue(0)
			onComplete?.()
		}
	}, [onComplete, value])

	useEffect(() => {
		setValue(0)
	}, [time])

	return (
		<Input.Wrapper
			label={label ?? ''}
		>
			<Progress value={value} />
		</Input.Wrapper>
	)
}

export default ProgressBar