import { FC } from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChartLineIcon, UsersIcon, GearIcon, MapPinIcon } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { translate } from '@/i18n/translate'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import type { ThemedStyle } from '@/providers/theme/types'
import FriendsScreen from '@/screens/FriendsScreen'
import MapScreen from '@/screens/MapScreen/MapScreen'
import SettingsScreen from '@/screens/SettingsScreen/SettingsScreen'
import StatsScreen from '@/screens/StatsScreen'

import { BottomTabParamList, BottomTabScreens } from './BottomTabsNavigator.types'

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabsNavigator: FC = () => {
	const { bottom } = useSafeAreaInsets()
	const {
		themed,
		theme: { colors },
	} = useAppTheme()

	return (
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
					tabBarLabel: translate('bottomTabsNavigator:statsTab'),
					tabBarIcon: ({ focused }) => <ChartLineIcon color={focused ? colors.tint : colors.tintInactive} size={30} />,
				}}
			/>

			<Tab.Screen
				name={BottomTabScreens.Map}
				component={MapScreen}
				options={{
					tabBarLabel: translate('bottomTabsNavigator:mapTab'),
					tabBarIcon: ({ focused }) => <MapPinIcon color={focused ? colors.tint : colors.tintInactive} size={30} />,
				}}
			/>

			<Tab.Screen
				name={BottomTabScreens.Friends}
				component={FriendsScreen}
				options={{
					tabBarLabel: translate('bottomTabsNavigator:friendsTab'),
					tabBarIcon: ({ focused }) => <UsersIcon color={focused ? colors.tint : colors.tintInactive} size={30} />,
				}}
			/>

			<Tab.Screen
				name={BottomTabScreens.Settings}
				component={SettingsScreen}
				options={{
					tabBarLabel: translate('bottomTabsNavigator:settingsTab'),
					tabBarIcon: ({ focused }) => <GearIcon color={focused ? colors.tint : colors.tintInactive} size={30} />,
				}}
			/>
		</Tab.Navigator>
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

export default BottomTabsNavigator
