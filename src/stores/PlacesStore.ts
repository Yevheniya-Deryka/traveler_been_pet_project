import { makeObservable, observable, action, computed } from 'mobx'
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
	public places = new Map<string, Place>()
	public tempMarkerCoordinate?: LatLng = undefined

	constructor() {
		// Using MakeAutoObservable without decorators needs additional babel configuration that causes issues for other libraries
		makeObservable(this, {
			places: observable,
			tempMarkerCoordinate: observable,
			userPlaces: computed,
			startListening: action,
			setTempMarkerCoordinate: action,
			clearTempMarkerCoordinate: action,
		})
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
		this.tempMarkerCoordinate = coordinate
	}

	public clearTempMarkerCoordinate = () => {
		this.tempMarkerCoordinate = undefined
	}
}

export default PlacesStore
