import "@/utils/gestureHandler"
import { FC, useEffect, useState } from "react"
import { useFonts } from "expo-font"
// import * as Linking from "expo-linking"
import { KeyboardProvider } from "react-native-keyboard-controller"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"

import Config from "@/config"
import { initI18n } from "@/i18n"
import MainStackNavigator from "@/navigators/MainStackNavigator/MainStackNavigator"
import { AppErrorBoundary } from "@/providers/AppErrorBoundary"
import AuthProvider from "@/providers/AuthProvider"
import NavigationProvider from "@/providers/NavigationProvider"
import ThemeProvider from "@/providers/theme/ThemeProvider"
import { customFontsToLoad } from "@/providers/theme/typography"
import { loadDateFnsLocale } from "@/utils/formatDate"
import { useNavigationPersistence } from "@/utils/navigationUtilities"
import * as storage from "@/utils/storage"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
// const prefix = Linking.createURL("/")
// const config = {
//   screens: {
//     Login: {
//       path: "",
//     },
//     Welcome: "welcome",
//     Demo: {
//       screens: {
//         DemoShowroom: {
//           path: "showroom/:queryIndex?/:itemIndex?",
//         },
//         DemoDebug: "debug",
//         DemoPodcastList: "podcast",
//         DemoCommunity: "community",
//       },
//     },
//   },
// }

const App: FC = () => {
	const {
		initialNavigationState,
		onNavigationStateChange,
		isRestored: isNavigationStateRestored,
	} = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

	const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad)
	const [isI18nInitialized, setIsI18nInitialized] = useState(false)

	useEffect(() => {
		initI18n()
			.then(() => setIsI18nInitialized(true))
			.then(() => loadDateFnsLocale())
	}, [])

	if (!isNavigationStateRestored || !isI18nInitialized || (!areFontsLoaded && !fontLoadError)) {
		return null
	}

	// const linking = {
	//   prefixes: [prefix],
	//   config,
	// }

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<KeyboardProvider>
				<AuthProvider>
					<ThemeProvider>
						<NavigationProvider
							// linking={linking}
							initialState={initialNavigationState}
							onStateChange={onNavigationStateChange}
						>
							<AppErrorBoundary catchErrors={Config.catchErrors}>
								<MainStackNavigator />
							</AppErrorBoundary>
						</NavigationProvider>
					</ThemeProvider>
				</AuthProvider>
			</KeyboardProvider>
		</SafeAreaProvider>
	)
}

export default App
