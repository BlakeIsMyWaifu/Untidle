import { Box, Image, Text, createStyles } from '@mantine/core'
import { Item as ItemData } from 'data/items/items'
import { FC } from 'react'
import { colours } from 'utils/colours'

const useStyles = createStyles(theme => ({
	container: {
		borderRadius: theme.radius.md,
		border: '2px solid',
		position: 'relative'
	},
	amount: {
		position: 'absolute',
		bottom: 0,
		right: '6px'
	}
}))

interface ItemProps {
	itemType: 'material' | 'equipment';
	itemData: ItemData;
	amount: number;
}

const Item: FC<ItemProps> = ({ itemType, itemData, amount }) => {

	const { classes } = useStyles()

	return (
		<Box className={classes.container} style={{
			borderColor: colours[itemData.rarity]
		}}>
			<Image
				withPlaceholder
				src={`assets/items/${itemType}/${itemData.category}/${itemData.image}.png`}
				placeholder={<Text style={{ height: '100%' }} align='center'>Unknown Image</Text>}
			/>
			{amount !== 1 && <Text className={classes.amount}>{amount}</Text>}
		</Box>
	)
}

export default Item