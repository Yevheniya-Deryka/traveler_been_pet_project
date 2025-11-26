import { FC, useCallback, useMemo } from 'react'
import { Alert, SectionList, SectionListData, SectionListRenderItem, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TxKeyPath } from '@/i18n'
import { translate } from '@/i18n/translate'
import { useAuthContext } from '@/providers/AuthProvider'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'

import SettingsSectionButtonItem from './SettingsSectionButtonItem'
import SettingsSectionHeader from './SettingsSectionHeader'
import SettingsSectionToogleItem from './SettingsSectionToogleItem'

type SectionItem = {
	titleTx: TxKeyPath
	isDanger?: boolean
	type: 'button' | 'link' | 'toggle'
	onPress: () => void
}

type Section = {
	titleTx: TxKeyPath
	data: SectionItem[]
}

const SettingsScreen: FC = () => {
	const { themeContext, setThemeContextOverride, themed } = useAppTheme()
	const { logOut } = useAuthContext()

	const toggleTheme = useCallback(() => {
		setThemeContextOverride(themeContext === 'dark' ? 'light' : 'dark')
	}, [themeContext, setThemeContextOverride])

	const logOutWithAlert = useCallback(() => {
		Alert.alert(translate('alerts:areYouSure'), translate('alerts:confirmLogOut'), [
			{
				text: translate('common:cancel'),
				style: 'cancel',
			},
			{
				text: translate('common:logOut'),
				onPress: async () => {
					try {
						await logOut()
					} catch (error) {
						Alert.alert(translate('alerts:logOutError'), (error as Error).message)
					}
				},
			},
		])
	}, [logOut])

	const sections: SectionListData<SectionItem, Section>[] = useMemo(
		() => [
			{
				titleTx: 'settingsScreen:appAppearance',
				data: [
					{
						titleTx: 'settingsScreen:darkTheme',
						type: 'toggle',
						onPress: toggleTheme,
					},
				],
			},
			{
				titleTx: 'settingsScreen:yourAccount',
				data: [
					{
						titleTx: 'settingsScreen:logOut',
						type: 'button',
						onPress: logOutWithAlert,
					},
				],
			},
		],
		[logOutWithAlert, toggleTheme],
	)

	const renderItem: SectionListRenderItem<SectionItem, Section> = useCallback(({ item }) => {
		switch (item.type) {
			case 'button':
				return <SettingsSectionButtonItem titleTx={item.titleTx} isDanger={item.isDanger} onPress={item.onPress} />
			case 'link':
				return null // Placeholder for future link item
			case 'toggle':
				return <SettingsSectionToogleItem titleTx={item.titleTx} onToogle={item.onPress} />
			default:
				return null
		}
	}, [])

	const renderSectionHeader = useCallback(
		({ section }: { section: SectionListData<SectionItem, Section> }) => (
			<SettingsSectionHeader titleTx={section.titleTx} />
		),
		[],
	)

	return (
		<SafeAreaView style={themed($screenContentContainer)}>
			<SectionList
				style={$sectionList}
				sections={sections}
				keyExtractor={(item) => item.titleTx}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				SectionSeparatorComponent={() => <View style={themed($separator)} />}
			/>
		</SafeAreaView>
	)
}

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
	paddingVertical: spacing.lg,
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
	backgroundColor: colors.background,
})

const $sectionList: ViewStyle = {
	width: '100%',
}

const $separator: ThemedStyle<ViewStyle> = ({ colors }) => ({
	height: 1,
	backgroundColor: colors.border,
})

export default SettingsScreen
