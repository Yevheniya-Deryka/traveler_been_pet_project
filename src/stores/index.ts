import PlacesStore from '@/stores/PlacesStore'

export const placesStore = new PlacesStore()

export const usePlacesStore = () => placesStore
