import { CollectedEquipment, EquipmentSlot } from 'data/items/equipment'
import { useMemo } from 'react'
import { useItemStore } from 'state/useItemStore'

/**
 * Gets all of the collected equipment the player currently owns for a given slot
 *
 * @param slot - Slot of equipment requested
 * @returns Array of collected Equipment. May be empty.
 */
export const useSlotEquipment = (slot: EquipmentSlot): CollectedEquipment[] => {

	const equipment = useItemStore(state => state.equipments)

	return useMemo(() => Object.values(equipment).filter(item => item.category === slot), [equipment, slot])
}