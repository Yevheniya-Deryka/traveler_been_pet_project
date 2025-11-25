import { View, ViewStyle, StyleSheet, Platform } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const MapScreen = () => {
	return (
		<View style={$screen}>
			<MapView
				provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined} // map doesnt show up on ios with google provider. use_frameworks issue: https://github.com/react-native-maps/react-native-maps/issues/5541
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
	justifyContent: 'center',
	alignItems: 'center',
}

const $map: ViewStyle = {
	...StyleSheet.absoluteFillObject,
}

export default MapScreen
