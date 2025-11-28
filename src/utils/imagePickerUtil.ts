import { Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { translate } from '@/i18n/translate'

export const pickImageFromGallery = async (): Promise<string | null> => {
	try {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			quality: 1,
		})

		if (!result.canceled) {
			return result.assets[0].uri
		} else {
			return null
		}
	} catch (error: any) {
		if (__DEV__) {
			console.error('Error picking image from gallery:', error)
		} else {
			// TODO: Sentry.captureException(error)
		}
		Alert.alert(translate('alerts:imagePickerError'))
		return null
	}
}

export default {}
