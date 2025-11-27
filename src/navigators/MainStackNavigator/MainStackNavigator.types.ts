import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

export enum MainStackScreens {
	Auth = 'Auth',
	Main = 'Main',
	NewPlace = 'NewPlace',
}

export type MainStackParamList = {
	[MainStackScreens.Auth]: undefined
	[MainStackScreens.Main]: undefined
	[MainStackScreens.NewPlace]: { latitude: number; longitude: number }
}

export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<MainStackParamList, T>

export type MainStackNavigationProps<T extends keyof MainStackParamList> = NativeStackNavigationProp<
	MainStackParamList,
	T
>
