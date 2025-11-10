import { View, ViewStyle } from "react-native"

import { Text } from "@/components/Text"

const MapScreen = () => {
	return (
		<View style={$screen}>
			<Text>Map</Text>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
}

export default MapScreen
