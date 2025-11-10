import { View, ViewStyle } from "react-native"

import { Text } from "@/components/Text"

const SettingsScreen = () => {
	return (
		<View style={$screen}>
			<Text>Settings</Text>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
}

export default SettingsScreen
