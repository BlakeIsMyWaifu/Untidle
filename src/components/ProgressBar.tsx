import { Input, Progress } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect, useMemo, useState } from 'react'

interface ProgressBarProps {
	time: number;
	label?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ time, label }) => {

	const [value, setValue] = useState(0)

	const incrementor = useMemo(() => 100 / (time / 100), [time])

	const { start, stop } = useInterval(() => {
		setValue(prev => prev + incrementor)
	}, 100)

	useMountEffect(() => {
		start()
		return stop
	})

	useEffect(() => {
		if (value === 100) setValue(0)
	}, [value])

	return (
		<Input.Wrapper
			label={label ?? ''}
		>
			<Progress value={value} />
		</Input.Wrapper>
	)
}

export default ProgressBar