import { FC } from 'react'
import { View, ViewStyle } from 'react-native'

import { Text } from '@/components/Text'
import { TxKeyPath } from '@/i18n'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'

type Props = {
	titleTx: TxKeyPath
}

const SettingsSectionHeader: FC<Props> = ({ titleTx }) => {
	const { themed } = useAppTheme()

	return (
		<View style={themed($headerContainer)}>
			<Text preset="subheading" tx={titleTx} />
		</View>
	)
}

const $headerContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	paddingHorizontal: spacing.md,
	paddingBottom: spacing.sm,
	marginTop: spacing.lg,
})

export default SettingsSectionHeader
