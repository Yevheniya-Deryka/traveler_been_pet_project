import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabsNavigator from '@/navigators/BottomTabsNavigator/BottomTabsNavigator'
import { MainStackParamList, MainStackScreens } from '@/navigators/MainStackNavigator/MainStackNavigator.types'
import { useAuthContext } from '@/providers/AuthProvider'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import NewPlaceScreen from '@/screens/NewPlaceScreen'

import AuthStackNavigator from '../AuthStackNavigator/AuthStackNavigator'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStackNavigator = () => {
	const { isInitialized, userId } = useAuthContext()

	const {
		theme: { colors },
	} = useAppTheme()

	if (!isInitialized) {
		// splash screen here
		return null
	}

	if (!userId) {
		return <AuthStackNavigator />
	}

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
			<Stack.Screen name={MainStackScreens.NewPlace} component={NewPlaceScreen} />
		</Stack.Navigator>
	)
}

export default MainStackNavigator
