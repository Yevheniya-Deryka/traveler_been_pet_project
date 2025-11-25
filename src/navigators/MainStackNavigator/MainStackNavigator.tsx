import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { useAuthContext } from '@/providers/AuthProvider'
// import { LoginScreen } from '@/screens/LoginScreen'
import BottomTabsNavigator from '@/navigators/BottomTabsNavigator/BottomTabsNavigator'
import { MainStackParamList, MainStackScreens } from '@/navigators/MainStackNavigator/MainStackNavigator.types'
import { useAppTheme } from '@/providers/theme/ThemeProvider'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStackNavigator = () => {
	// const { isAuthenticated } = useAuthContext()

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
			initialRouteName={MainStackScreens.Main}
		>
			<Stack.Screen name={MainStackScreens.Main} component={BottomTabsNavigator} />
		</Stack.Navigator>
	)
}

export default MainStackNavigator
