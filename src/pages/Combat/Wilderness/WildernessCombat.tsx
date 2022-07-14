import { Box, Button, Group, Title } from '@mantine/core'
import Fight from 'components/Fight'
import { WildernessData, wildernessData } from 'data/combat/wildernessData'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useFightStore } from 'state/useFightStore'
import { randomArrayElementUndefined } from 'utils/randomElement'

const WildernessCombat: FC = () => {

	const { area } = useParams()
	const data: WildernessData = wildernessData[area ?? ''] ?? {
		name: 'Error',
		image: '',
		levelRequired: 0,
		enemies: []
	}
	const { name, enemies } = data

	// TODO move enemy logic into separate component

	const setEnemy = useFightStore(state => state.setEnemy)
	const enemyHealth = useFightStore(state => state.enemyHealth)
	const enemyDropLoot = useFightStore(state => state.enemyDropLoot)

	const enemy = randomArrayElementUndefined(enemies)

	useMountEffect(() => {
		setEnemy(enemy ?? null)
	})

	useEffect(() => {
		if (enemyHealth <= 0) {
			setEnemy(enemy ?? null)
			if (!enemy) return
			enemyDropLoot()
		}
	}, [enemy, enemyDropLoot, enemyHealth, setEnemy])

	return (
		<Box>
			<Group position='apart' p='md'>
				<Title style={{
					textTransform: 'capitalize'
				}}>{name}</Title>

				<Button
					variant='default'
					component={Link}
					to='/combat'
				>
					Go Back
				</Button>
			</Group>

			<Fight />
		</Box>
	)
}

export default WildernessCombat