import { View, ViewStyle } from "react-native"

import { Text } from "@/components/Text"

const FriendsScreen = () => {
	return (
		<View style={$screen}>
			<Text>Friends</Text>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
}

export default FriendsScreen
