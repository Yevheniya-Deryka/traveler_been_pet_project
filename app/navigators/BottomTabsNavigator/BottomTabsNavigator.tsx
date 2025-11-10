import { TextStyle, ViewStyle } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Icon } from "@/components/Icon"
import { EpisodeProvider } from "@/context/EpisodeContext"
import { translate } from "@/i18n/translate"
import FriendsScreen from "@/screens/FriendsScreen"
import MapScreen from "@/screens/MapScreen"
import SettingsScreen from "@/screens/SettingsScreen"
import StatsScreen from "@/screens/StatsScreen"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { BottomTabParamList, BottomTabScreens } from "./BottomTabsNavigator.types"

const Tab = createBottomTabNavigator<BottomTabParamList>()

export function BottomTabsNavigator() {
	const { bottom } = useSafeAreaInsets()
	const {
		themed,
		theme: { colors },
	} = useAppTheme()

	return (
		<EpisodeProvider>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarHideOnKeyboard: true,
					tabBarStyle: themed([$tabBar, { height: bottom + 70 }]),
					tabBarActiveTintColor: colors.text,
					tabBarInactiveTintColor: colors.text,
					tabBarLabelStyle: themed($tabBarLabel),
					tabBarItemStyle: themed($tabBarItem),
				}}
			>
				<Tab.Screen
					name={BottomTabScreens.Stats}
					component={StatsScreen}
					options={{
						tabBarLabel: translate("bottomTabsNavigator:statsTab"),
						tabBarIcon: ({ focused }) => (
							<Icon icon="components" color={focused ? colors.tint : colors.tintInactive} size={30} />
						),
					}}
				/>

				<Tab.Screen
					name={BottomTabScreens.Map}
					component={MapScreen}
					options={{
						tabBarLabel: translate("bottomTabsNavigator:mapTab"),
						tabBarIcon: ({ focused }) => (
							<Icon icon="community" color={focused ? colors.tint : colors.tintInactive} size={30} />
						),
					}}
				/>

				<Tab.Screen
					name={BottomTabScreens.Friends}
					component={FriendsScreen}
					options={{
						tabBarLabel: translate("bottomTabsNavigator:friendsTab"),
						tabBarIcon: ({ focused }) => (
							<Icon icon="podcast" color={focused ? colors.tint : colors.tintInactive} size={30} />
						),
					}}
				/>

				<Tab.Screen
					name={BottomTabScreens.Settings}
					component={SettingsScreen}
					options={{
						tabBarLabel: translate("bottomTabsNavigator:settingsTab"),
						tabBarIcon: ({ focused }) => (
							<Icon icon="debug" color={focused ? colors.tint : colors.tintInactive} size={30} />
						),
					}}
				/>
			</Tab.Navigator>
		</EpisodeProvider>
	)
}

const $tabBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
	backgroundColor: colors.background,
	borderTopColor: colors.transparent,
})

const $tabBarItem: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	paddingTop: spacing.md,
})

const $tabBarLabel: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
	fontSize: 12,
	fontFamily: typography.primary.medium,
	lineHeight: 16,
	color: colors.text,
})
