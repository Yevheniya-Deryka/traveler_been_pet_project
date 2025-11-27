import { FC, useCallback } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PlusIcon } from 'phosphor-react-native'
import { LatLng } from 'react-native-maps'

import { MainStackNavigationProps, MainStackScreens } from '@/navigators/MainStackNavigator/MainStackNavigator.types'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'

type Props = LatLng

const buttonSize = 80

const NewPlaceButton: FC<Props> = ({ latitude, longitude }) => {
	const navigation = useNavigation<MainStackNavigationProps<MainStackScreens.NewPlace>>()
	const {
		themed,
		theme: { colors },
	} = useAppTheme()

	const onNewPlacePress = useCallback(() => {
		navigation.navigate(MainStackScreens.NewPlace, {
			latitude: latitude,
			longitude: longitude,
		})
	}, [latitude, longitude, navigation])

	// TODO: Add pulsating and appear/disappear animation to the button
	return (
		<TouchableOpacity onPress={onNewPlacePress} style={themed($plusButton)}>
			<PlusIcon size={buttonSize / 2} color={colors.buttonElement} weight="bold" />
		</TouchableOpacity>
	)
}

const $plusButton: ThemedStyle<ViewStyle> = (theme) => ({
	position: 'absolute',
	bottom: 20,
	alignSelf: 'center',
	width: buttonSize,
	aspectRatio: 1,
	borderRadius: buttonSize / 2,
	backgroundColor: theme.colors.buttonBackground,
	justifyContent: 'center',
	alignItems: 'center',
	shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 6,
	},
	shadowOpacity: 0.45,
	shadowRadius: 8,
	elevation: 10,
})

export default NewPlaceButton
