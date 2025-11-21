import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"

import { MainStackParamList, MainStackScreenProps } from "../MainStackNavigator/MainStackNavigator.types"

export enum BottomTabScreens {
	Stats = "Stats",
	Map = "Map",
	Friends = "Friends",
	Settings = "Settings",
}

export type BottomTabParamList = {
	[BottomTabScreens.Stats]: undefined
	[BottomTabScreens.Map]: undefined
	[BottomTabScreens.Friends]: undefined
	[BottomTabScreens.Settings]: undefined
}

export type BottomTabStackScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<BottomTabParamList, T>,
	MainStackScreenProps<keyof MainStackParamList>
>
