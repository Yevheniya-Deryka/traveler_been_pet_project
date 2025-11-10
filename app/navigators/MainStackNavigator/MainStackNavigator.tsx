import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Config from "@/config"
// import { useAuth } from "@/context/AuthContext"
import { ErrorBoundary } from "@/screens/ErrorScreen/ErrorBoundary"
// import { LoginScreen } from "@/screens/LoginScreen"
import { useAppTheme } from "@/theme/context"

import { AppStackScreens, type AppStackParamList, type NavigationProps } from "./MainStackNavigator.types"
import { BottomTabsNavigator } from "../BottomTabsNavigator/BottomTabsNavigator"
import { navigationRef, useBackButtonHandler } from "../navigationUtilities"

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const MainStackNavigator = () => {
	// const { isAuthenticated } = useAuth()

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
			initialRouteName={AppStackScreens.Main}
		>
			<Stack.Screen name={AppStackScreens.Main} component={BottomTabsNavigator} />
		</Stack.Navigator>
	)
}

const AppNavigator = (props: NavigationProps) => {
	const { navigationTheme } = useAppTheme()

	useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
			<ErrorBoundary catchErrors={Config.catchErrors}>
				<MainStackNavigator />
			</ErrorBoundary>
		</NavigationContainer>
	)
}

export default AppNavigator
