import { FC, useCallback, useState } from 'react'
import { Pressable, ScrollView, TextStyle, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'
import { Radio } from '@/components/Toggle/Radio'
import { useAppTheme } from '@/providers/theme/ThemeProvider'
import { ThemedStyle } from '@/providers/theme/types'
import { saveImageToFirebaseStorage } from '@/utils/firebaseStorageUtil'
import { pickImageFromGallery } from '@/utils/imagePickerUtil'

const NewPlaceScreen: FC = () => {
	const { themed } = useAppTheme()

	const [placeName, setPlaceName] = useState('')
	const [selectedDate, _setSelectedDate] = useState<Date>()
	const [note, _setNote] = useState('')
	const [isPrivate, setIsPrivate] = useState(false)
	const [coverPhoto, setCoverPhoto] = useState<string>()
	const [photos, _setPhotos] = useState<string[]>([])

	// Placeholder functions
	const handleDatePress = useCallback(() => {
		// TODO: Open calendar picker
	}, [])

	const handlePickCoverPhoto = useCallback(async () => {
		const uri = await pickImageFromGallery()
		if (uri) {
			setCoverPhoto(uri)
		}
	}, [])

	const handleAddNote = useCallback(() => {
		// TODO: Open note input
	}, [])

	const handleAddPhotos = useCallback(() => {
		// TODO: Open image picker for multiple photos
	}, [])

	const handleSave = useCallback(async () => {
		// TODO: Save the new place logic
		// TODO: Promise.all for all async operations + implement loading state

		const coverUrl = await saveImageToFirebaseStorage(coverPhoto!, 'cover')
		console.log('Place saved with cover photo URL:', coverUrl)

		// TODO: clear tempMarkerCoordinate in PlacesStore after saving
	}, [coverPhoto])

	return (
		<SafeAreaView style={themed($screenContainer)}>
			<ScrollView style={$scrollView} contentContainerStyle={themed($contentContainer)}>
				{/* Place Name Input */}
				<TextField
					value={placeName}
					onChangeText={setPlaceName}
					placeholderTx="newPlaceScreen:placeNamePlaceholder"
					labelTx="newPlaceScreen:placeName"
					containerStyle={themed($fieldContainer)}
				/>

				{/* Date Picker */}
				<View style={themed($fieldContainer)}>
					<Text preset="formLabel" style={themed($label)} tx="newPlaceScreen:dateVisited" />
					<Pressable onPress={handleDatePress} style={themed($datePickerButton)}>
						<Text style={themed($datePickerText)} tx={selectedDate ? undefined : 'newPlaceScreen:selectDate'}>
							{selectedDate ? selectedDate.toLocaleDateString() : undefined}
						</Text>
					</Pressable>
				</View>

				{/* Cover Photo */}
				<View style={themed($fieldContainer)}>
					<Text preset="formLabel" style={themed($label)} tx="newPlaceScreen:coverPhoto" />
					<Pressable onPress={handlePickCoverPhoto} style={themed($coverPhotoButton)}>
						<Text
							style={themed($buttonText)}
							tx={coverPhoto ? 'newPlaceScreen:coverPhotoSelected' : 'newPlaceScreen:pickCoverPhoto'}
						/>
					</Pressable>
				</View>

				{/* Note */}
				<View style={themed($fieldContainer)}>
					<Text preset="formLabel" style={themed($label)} tx="newPlaceScreen:note" />
					<Pressable onPress={handleAddNote} style={themed($noteButton)}>
						<Text style={themed($buttonText)} numberOfLines={3} tx={note ? undefined : 'newPlaceScreen:addNote'}>
							{note || undefined}
						</Text>
					</Pressable>
				</View>

				{/* Privacy Toggle */}
				<View style={themed($fieldContainer)}>
					<Text preset="formLabel" style={themed($label)} tx="newPlaceScreen:privacy" />
					<View style={themed($privacyContainer)}>
						<View style={themed($privacyOption)}>
							<Radio value={!isPrivate} onValueChange={() => setIsPrivate(false)} />
							<Text style={themed($privacyLabel)} tx="newPlaceScreen:public" />
						</View>
						<View style={themed($privacyOption)}>
							<Radio value={isPrivate} onValueChange={() => setIsPrivate(true)} />
							<Text style={themed($privacyLabel)} tx="newPlaceScreen:private" />
						</View>
					</View>
				</View>

				{/* Add Photos */}
				<View style={themed($fieldContainer)}>
					<Text preset="formLabel" style={themed($label)} tx="newPlaceScreen:photos" />
					<Pressable onPress={handleAddPhotos} style={themed($addPhotosButton)}>
						<Text
							style={themed($buttonText)}
							tx={photos.length > 0 ? 'newPlaceScreen:photosAdded' : 'newPlaceScreen:addPhotos'}
							txOptions={{ count: photos.length }}
						/>
					</Pressable>
				</View>

				{/* Save Button */}
				<Button preset="filled" tx="newPlaceScreen:savePlace" onPress={handleSave} style={themed($saveButton)} />
			</ScrollView>
		</SafeAreaView>
	)
}

const $screenContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
	flex: 1,
	backgroundColor: colors.background,
})

const $scrollView: ViewStyle = {
	flex: 1,
}

const $contentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	padding: spacing.lg,
})

const $fieldContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	marginBottom: spacing.lg,
})

const $label: ThemedStyle<TextStyle> = ({ spacing }) => ({
	marginBottom: spacing.xs,
})

const $datePickerButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	borderWidth: 1,
	borderRadius: 4,
	backgroundColor: colors.palette.neutral200,
	borderColor: colors.palette.neutral400,
	padding: spacing.sm,
	minHeight: 56,
	justifyContent: 'center',
})

const $datePickerText: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.text,
})

const $coverPhotoButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	borderWidth: 1,
	borderRadius: 4,
	backgroundColor: colors.palette.neutral200,
	borderColor: colors.palette.neutral400,
	padding: spacing.sm,
	minHeight: 56,
	justifyContent: 'center',
	alignItems: 'center',
})

const $noteButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	borderWidth: 1,
	borderRadius: 4,
	backgroundColor: colors.palette.neutral200,
	borderColor: colors.palette.neutral400,
	padding: spacing.sm,
	minHeight: 80,
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
})

const $buttonText: ThemedStyle<TextStyle> = ({ colors }) => ({
	color: colors.text,
})

const $privacyContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	flexDirection: 'row',
	gap: spacing.lg,
})

const $privacyOption: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	flexDirection: 'row',
	alignItems: 'center',
	gap: spacing.sm,
})

const $privacyLabel: ThemedStyle<TextStyle> = ({ spacing }) => ({
	marginLeft: spacing.xs,
})

const $addPhotosButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
	borderWidth: 1,
	borderRadius: 4,
	backgroundColor: colors.palette.neutral200,
	borderColor: colors.palette.neutral400,
	padding: spacing.sm,
	minHeight: 56,
	justifyContent: 'center',
	alignItems: 'center',
})

const $saveButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
	marginTop: spacing.md,
})

export default NewPlaceScreen
