import { FC } from 'react'
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { CaretRightIcon } from 'phosphor-react-native'

import { Text } from '@/components/Text'
import { TxKeyPath } from '@/i18n'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'

type Props = {
	titleTx: TxKeyPath
	isDanger?: boolean
	onPress: () => void
}

const SettingsSectionButtonItem: FC<Props> = ({ titleTx, isDanger, onPress }) => {
	const {
		themed,
		theme: { colors, spacing },
	} = useAppTheme()

	return (
		<TouchableOpacity style={themed($container)} onPress={onPress}>
			<Text preset="bold" style={themed(isDanger ? $titleDanger : $title)} tx={titleTx} />
			<CaretRightIcon size={spacing.xl} color={colors.border} />
		</TouchableOpacity>
	)
}

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingHorizontal: spacing.md,
	paddingVertical: spacing.sm,
})

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.tint,
})

const $titleDanger: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.error,
})

export default SettingsSectionButtonItem
