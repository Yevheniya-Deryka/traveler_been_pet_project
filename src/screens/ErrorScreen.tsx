import { ErrorInfo, FC } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/providers/theme/ThemeProvider"
import type { ThemedStyle } from "@/providers/theme/types"

export type ErrorDetailsProps = {
	error: Error
	errorInfo: ErrorInfo | null
	onReset(): void
}

const ErrorScreen: FC<ErrorDetailsProps> = ({ error, errorInfo, onReset }) => {
	const { themed } = useAppTheme()

	return (
		<Screen preset="fixed" safeAreaEdges={["top", "bottom"]} contentContainerStyle={themed($contentContainer)}>
			<View style={$topSection}>
				<Icon icon="ladybug" size={64} />
				<Text style={themed($heading)} preset="subheading" tx="errorScreen:title" />
				<Text tx="errorScreen:friendlySubtitle" />
			</View>

			<ScrollView style={themed($errorSection)} contentContainerStyle={themed($errorSectionContentContainer)}>
				<Text style={themed($errorContent)} weight="bold" text={`${error}`.trim()} />
				<Text selectable style={themed($errorBacktrace)} text={`${errorInfo?.componentStack ?? ""}`.trim()} />
			</ScrollView>

			<Button preset="reversed" style={themed($resetButton)} onPress={onReset} tx="errorScreen:reset" />
		</Screen>
	)
}

const $contentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	alignItems: "center",
	paddingHorizontal: spacing.lg,
	paddingTop: spacing.xl,
	flex: 1,
})

const $topSection: ViewStyle = {
	flex: 1,
	alignItems: "center",
}

const $heading: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
	color: colors.error,
	marginBottom: spacing.md,
})

const $errorSection: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	flex: 2,
	backgroundColor: colors.separator,
	marginVertical: spacing.md,
	borderRadius: 6,
})

const $errorSectionContentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	padding: spacing.md,
})

const $errorContent: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.error,
})

const $errorBacktrace: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
	marginTop: spacing.md,
	color: colors.textDim,
})

const $resetButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	backgroundColor: colors.error,
	paddingHorizontal: spacing.xxl,
})

export default ErrorScreen
