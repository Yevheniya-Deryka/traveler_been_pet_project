import { View, ViewStyle } from "react-native"

import { Text } from "@/components/Text"

const StatsScreen = () => {
	return (
		<View style={$screen}>
			<Text>Stats</Text>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
}

export default StatsScreen
