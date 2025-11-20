import { TextStyle, View, ViewStyle } from "react-native"

import { Button } from "src/components/Button"
import { Text } from "src/components/Text"

import { useAppTheme } from "@/providers/theme/ThemeProvider"
import type { ThemedStyle } from "@/providers/theme/types"

const SettingsScreen = () => {
	const { themeContext, setThemeContextOverride, themed } = useAppTheme()

	const toggleTheme = () => {
		setThemeContextOverride(themeContext === "dark" ? "light" : "dark")
	}

	return (
		<View style={themed($screenContentContainer)}>
			<Text style={themed($title)}>Settings</Text>
			<Button
				tx={themeContext === "dark" ? "settingsScreen:switchToLightTheme" : "settingsScreen:switchToDarkTheme"}
				onPress={toggleTheme}
				style={themed($button)}
			/>
		</View>
	)
}

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
	padding: spacing.lg,
	alignItems: "center",
	justifyContent: "center",
	flex: 1,
	backgroundColor: colors.background,
})

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
	marginBottom: spacing.xl,
})

const $button: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
	marginTop: spacing.md,
	minWidth: 200,
	backgroundColor: colors.tint,
})

export default SettingsScreen
