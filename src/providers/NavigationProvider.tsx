import { FC, PropsWithChildren } from "react"
import { NavigationContainer } from "@react-navigation/native"

import Config from "@/config"
import { NavigationProps } from "@/navigators/MainStackNavigator/MainStackNavigator.types"
import { useAppTheme } from "@/providers/theme/ThemeProvider"
import { navigationRef, useBackButtonHandler } from "@/utils/navigationUtilities"

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

const NavigationProvider: FC<PropsWithChildren<NavigationProps>> = ({ children, ...props }) => {
	const { navigationTheme } = useAppTheme()

	useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
			{children}
		</NavigationContainer>
	)
}

export default NavigationProvider
