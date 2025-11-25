import { View, ViewStyle } from 'react-native'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useAuthContext } from '@/providers/AuthProvider'

const LoginScreen = () => {
	const { signInWithGoogle } = useAuthContext()

	return (
		<View style={$screen}>
			<Text preset="heading" style={$title} tx="loginScreen:welcome" />
			<Text style={$subtitle} tx="loginScreen:signInToContinue" />
			<Button tx="loginScreen:signInWithGoogle" preset="filled" onPress={signInWithGoogle} style={$button} />
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: 20,
}

const $title: ViewStyle = {
	marginBottom: 8,
}

const $subtitle: ViewStyle = {
	marginBottom: 32,
}

const $button: ViewStyle = {
	width: '100%',
	maxWidth: 300,
}

export default LoginScreen
