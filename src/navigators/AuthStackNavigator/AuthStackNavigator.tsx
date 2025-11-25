import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthStackParamList, AuthStackScreens } from '@/navigators/AuthStackNavigator/AuthStackNavigator.types'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import LoginScreen from '@/screens/LoginScreen'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
	const {
		theme: { colors },
	} = useAppTheme()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				navigationBarColor: colors.background,
				contentStyle: {
					backgroundColor: colors.background,
				},
			}}
			initialRouteName={AuthStackScreens.Login}
		>
			<Stack.Screen name={AuthStackScreens.Login} component={LoginScreen} />
		</Stack.Navigator>
	)
}

export default AuthStackNavigator
