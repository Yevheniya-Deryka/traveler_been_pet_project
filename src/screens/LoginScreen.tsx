import { TextStyle, View, ViewStyle } from 'react-native'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useAuthContext } from '@/providers/AuthProvider'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import type { ThemedStyle } from '@/providers/theme/types'

const LoginScreen = () => {
	const { signInWithGoogle } = useAuthContext()
	const { themed } = useAppTheme()

	return (
		<View style={themed($screen)}>
			<Text preset="heading" style={themed($title)} tx="loginScreen:welcome" />
			<Text style={themed($subtitle)} tx="loginScreen:signInToContinue" />
			<Button tx="loginScreen:signInWithGoogle" preset="filled" onPress={signInWithGoogle} style={themed($button)} />
		</View>
	)
}

const $screen: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: spacing.lg,
	backgroundColor: colors.background,
})

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
	marginBottom: spacing.xs,
})

const $subtitle: ThemedStyle<TextStyle> = ({ spacing }) => ({
	marginBottom: spacing.xxl,
})

const $button: ThemedStyle<ViewStyle> = ({ colors }) => ({
	width: '100%',
	maxWidth: 300,
	backgroundColor: colors.tint,
})

export default LoginScreen
