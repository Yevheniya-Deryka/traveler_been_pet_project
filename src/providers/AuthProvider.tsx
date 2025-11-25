import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, FirebaseAuthTypes } from '@react-native-firebase/auth'

export type AuthContextType = {
	isInitialized: boolean
	userId?: string
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
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
