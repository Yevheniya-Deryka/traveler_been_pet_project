import { useCallback } from 'react'
import { View, ViewStyle, StyleSheet, Platform } from 'react-native'
import { observer } from 'mobx-react-lite'
import MapView, { LongPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { usePlacesStore } from '@/stores'

import NewPlaceButton from './NewPlaceButton'

const MapScreen = () => {
	const {
		theme: { colors },
	} = useAppTheme()
	const { tempMarkerCoordinate, setTempMarkerCoordinate } = usePlacesStore()

	const handleLongPress = useCallback(
		(event: LongPressEvent) => {
			const coordinate = event.nativeEvent.coordinate
			setTempMarkerCoordinate(coordinate)
		},
		[setTempMarkerCoordinate],
	)

	const handlePress = useCallback(() => {
		if (tempMarkerCoordinate) {
			setTempMarkerCoordinate(undefined)
		}
	}, [setTempMarkerCoordinate, tempMarkerCoordinate])

	console.log(tempMarkerCoordinate)
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
				onLongPress={handleLongPress}
				onPress={handlePress}
			>
				{tempMarkerCoordinate && <Marker pinColor={colors.tint} coordinate={tempMarkerCoordinate} />}
			</MapView>
			{tempMarkerCoordinate && (
				<NewPlaceButton latitude={tempMarkerCoordinate.latitude} longitude={tempMarkerCoordinate.longitude} />
			)}
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

export default observer(MapScreen)
