import { Box, Image, Text, createStyles } from '@mantine/core'
import { Equipment } from 'data/items/equipment'
import { Material } from 'data/items/materials'
import { FC, MouseEventHandler } from 'react'
import { colours } from 'utils/colours'

import PlaceholderImage from './PlaceholderImage'

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
	onClick?: MouseEventHandler<HTMLDivElement>;
	imageOverride?: string;
}

const Item: FC<ItemProps> = ({ itemData, amount = 1, onClick, imageOverride }) => {

	const { classes } = useStyles({ colour: colours[itemData.rarity] })

	return (
		<Box className={classes.container} onClick={onClick}>
			<Image
				withPlaceholder
				src={imageOverride ? `assets/${imageOverride}.png` : `assets/items/${itemData.type}/${itemData.category}/${itemData.image}.png`}
				placeholder={<PlaceholderImage />}
			/>
			{amount !== 1 && <Text className={classes.amount}>{amount}</Text>}
		</Box>
	)
}

export default Item