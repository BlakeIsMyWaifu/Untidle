import { StatsList } from 'data/items/equipment'
import { useMemo } from 'react'
import { useCombatStore } from 'state/useCombatStore'
import { useItemStore } from 'state/useItemStore'
import { typedObject } from 'utils/typedObjectKeys'

export const usePlayerStats = (): Record<StatsList, number> => {

	const equippedEquipment = useCombatStore(state => state.equipment)
	const collectedEquipment = useItemStore(state => state.equipments)

	return useMemo(() => {
		const stats: Record<StatsList, number> = {
			'Attack Speed': 0,
			'Critical Chance': 0,
			'Critical Damage': 0,
			'Critical Resistance': 0,
			'Dodge': 0,
			'Health Regeneration': 0,
			'Lifesteal': 0,
			'Magic Find': 0,
			'Magical Damage': 0,
			'Magical Penetration': 0,
			'Magical Pierce': 0,
			'Magical Resistance': 0,
			'Maximum Health Percentage': 0,
			'Maximum Health': 0,
			'Movement Speed': 0,
			'Physical Damage': 0,
			'Physical Penetration': 0,
			'Physical Pierce': 0,
			'Physical Resistance': 0,
			'Slaying': 0
		}

		typedObject.entries(equippedEquipment).forEach(([slot, equipmentId]) => {
			if (slot === 'mainHand' && !equipmentId) {
				stats['Physical Damage'] += 1
				return
			}

			if (!equipmentId) return
			const equipment = collectedEquipment[equipmentId]
			if (!equipment) return

			const addStats = ([stat, amount]: [StatsList, number]): void => {
				stats[stat] += amount
			}
			typedObject.entries(equipment.baseStats).forEach(addStats)
			typedObject.entries(equipment.stats).forEach(addStats)
		})

		return stats
	}, [collectedEquipment, equippedEquipment])

}