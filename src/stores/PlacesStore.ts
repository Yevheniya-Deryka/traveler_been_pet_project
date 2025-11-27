import { makeAutoObservable } from 'mobx'
import { LatLng } from 'react-native-maps'

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

	public tempMarkerCoordinate?: LatLng | undefined

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

	public setTempMarkerCoordinate = (coordinate: LatLng | undefined) => {
		console.log('Setting temp marker coordinate to:', coordinate)
		this.tempMarkerCoordinate = coordinate
	}

	public clearTempMarkerCoordinate = () => {
		this.tempMarkerCoordinate = undefined
	}
}

export default PlacesStore
