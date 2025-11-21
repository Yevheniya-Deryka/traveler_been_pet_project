import { View, ViewStyle, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"

const MapScreen = () => {
	return (
		<View style={$screen}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={$map}
				region={{
					latitude: 50.4501,
					longitude: 30.5234,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
			></MapView>
		</View>
	)
}

const $screen: ViewStyle = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
}

const $map: ViewStyle = {
	...StyleSheet.absoluteFillObject,
}

export default MapScreen
