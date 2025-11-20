import { ComponentProps } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export enum MainStackScreens {
	Auth = "Auth",
	Main = "Main",
}

export type MainStackParamList = {
	[MainStackScreens.Auth]: undefined
	[MainStackScreens.Main]: undefined
}

export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<MainStackParamList, T>

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer<MainStackParamList>>> {}
