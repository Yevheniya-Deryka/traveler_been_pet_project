import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, FirebaseAuthTypes } from '@react-native-firebase/auth'
import {
	GoogleSignin,
	isErrorWithCode,
	isSuccessResponse,
	statusCodes,
} from '@react-native-google-signin/google-signin'

export type AuthContextType = {
	isInitialized: boolean
	userId?: string
	signInWithGoogle: () => Promise<void>
}

GoogleSignin.configure()

const signInWithGoogle = async () => {
	try {
		await GoogleSignin.hasPlayServices()
		const response = await GoogleSignin.signIn()
		if (isSuccessResponse(response)) {
			// handle successful sign in here
		} else {
			// sign in was cancelled by user
		}
	} catch (error) {
		if (isErrorWithCode(error)) {
			switch (error.code) {
				case statusCodes.IN_PROGRESS:
					// operation (eg. sign in) already in progress
					break
				case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
					// Android only, play services not available or outdated
					break
				default:
				// some other error happened
			}
		} else {
			// an error that's not related to google sign in occurred
		}
	}
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) throw new Error('useAuth must be used within an AuthProvider')
	return context
}

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isInitialized, setIsInitialized] = useState(false)
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

	const handleAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = useCallback(
		(user) => {
			setUser(user)
			if (!isInitialized) {
				setIsInitialized(true)
			}
		},
		[isInitialized],
	)

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged)
		return unsubscribe
	}, [handleAuthStateChanged])

	const value = {
		isInitialized,
		userId: user?.uid,
		signInWithGoogle,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
