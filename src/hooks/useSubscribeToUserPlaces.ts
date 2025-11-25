import { useEffect } from 'react'

import { useAuthContext } from '@/providers/AuthProvider'
import { usePlacesStore } from '@/stores'

const useSubscribeToUserPlaces = () => {
	const { userId } = useAuthContext()
	const { startListening } = usePlacesStore()

	// !! Should I use autorun here? Investigate.
	useEffect(() => {
		let unsubscribe: (() => void) | undefined

		if (userId) {
			unsubscribe = startListening(userId)
		}

		return () => {
			if (unsubscribe) {
				unsubscribe()
			}
		}
	}, [userId, startListening])
}

export default useSubscribeToUserPlaces
