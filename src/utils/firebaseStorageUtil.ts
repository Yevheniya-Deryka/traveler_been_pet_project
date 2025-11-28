import { getStorage, ref, putFile, getDownloadURL } from '@react-native-firebase/storage'

type ImageType = 'cover' | 'photo'

const defaultPathToCovers = 'places/covers/'
const defaultPathToPhotos = 'places/photos/'

export const saveImageToFirebaseStorage = async (uri: string, type: ImageType): Promise<string | null> => {
	const storageInstance = getStorage()
	const path = type === 'cover' ? defaultPathToCovers + '1234.jpg' : defaultPathToPhotos + '1234.jpg' // TODO: Generate unique
	const reference = ref(storageInstance, path)
	try {
		await putFile(reference, uri)
		const downloadURL = await getDownloadURL(reference)
		return downloadURL
	} catch (error) {
		if (__DEV__) {
			console.error('Error uploading image to Firebase Storage:', error)
		} else {
			// TODO: Sentry.captureException(error)
		}
		return null
	}
}

export default {}
