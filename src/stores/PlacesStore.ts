import { makeAutoObservable } from 'mobx'

export type Place = {
	id: string
	createdBy: string
	name: string
	beenAt: Date
	latitude: number
	longitude: number
	coverImage: string
	note: string
	isPrivate: boolean
	createdAt: Date
	updatedAt: Date
}

class PlacesStore {
	private places = new Map<string, Place>()

	constructor() {
		makeAutoObservable(this)
	}

	public startListening = (_userId: string): (() => void) => {
		const unsubscribe = () => {
			// subscribe to user places logic here
		}

		return unsubscribe
	}

	get userPlaces() {
		return Array.from(this.places.values())
	}
}

export default PlacesStore
