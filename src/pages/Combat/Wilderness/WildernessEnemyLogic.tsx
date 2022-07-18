import { EnemyData } from 'data/combat/enemyData'
import { useMountEffect } from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { useFightStore } from 'state/useFightStore'
import { randomArrayElementUndefined } from 'utils/randomElement'

interface WildernessEnemyLogicProps {
	enemies: EnemyData[];
}

const WildernessEnemyLogic: FC<WildernessEnemyLogicProps> = ({ enemies }) => {

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

	return null
}

export default WildernessEnemyLogic