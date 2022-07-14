import { Box, Image, Text, createStyles } from '@mantine/core'
import { Equipment } from 'data/items/equipment'
import { Material } from 'data/items/materials'
import { FC } from 'react'
import { colours } from 'utils/colours'

interface ItemStyle {
	colour: string;
}

const useStyles = createStyles((theme, { colour }: ItemStyle) => ({
	container: {
		borderRadius: theme.radius.md,
		border: `2px solid ${colour}`,
		position: 'relative',
		aspectRatio: '1'
	},
	amount: {
		position: 'absolute',
		bottom: 0,
		right: '6px'
	}
}))

interface ItemProps {
	itemData: Material | Equipment;
	amount?: number;
}

const Item: FC<ItemProps> = ({ itemData, amount = 1 }) => {

	const { classes } = useStyles({ colour: colours[itemData.rarity] })

	return (
		<Box className={classes.container}>
			<Image
				withPlaceholder
				src={`assets/items/${itemData.type}/${itemData.category}/${itemData.image}.png`}
				placeholder={<Text style={{ height: '100%' }} align='center'>Unknown Image</Text>}
			/>
			{amount !== 1 && <Text className={classes.amount}>{amount}</Text>}
		</Box>
	)
}

export default Item