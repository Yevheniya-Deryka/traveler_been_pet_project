import { View, ViewStyle } from 'react-native'

import { Text } from 'src/components/Text'

const LoginScreen = () => {
	return (
		<View style={$screen}>
			<Text>Login</Text>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
}

export default LoginScreen
