import { FC } from 'react'
import { Switch, TextStyle, View, ViewStyle } from 'react-native'

import { Text } from '@/components/Text'
import { TxKeyPath } from '@/i18n'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'

type Props = {
	titleTx: TxKeyPath
	onToogle: () => void
}

const SettingsSectionToogleItem: FC<Props> = ({ titleTx, onToogle }) => {
	const { themeContext, themed } = useAppTheme()

	return (
		<View style={themed($contentRow)}>
			<Text preset="bold" style={themed($title)} tx={titleTx} />
			<Switch style={themed($switch)} value={themeContext === 'dark'} onValueChange={onToogle} />
		</View>
	)
}

const $switch: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	height: spacing.xl,
})

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.tint,
})

const $contentRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingHorizontal: spacing.md,
	paddingVertical: spacing.sm,
})

export default SettingsSectionToogleItem
