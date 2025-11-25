import { ComponentProps } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum AuthStackScreens {
	Login = 'Login',
}

export type AuthStackParamList = {
	[AuthStackScreens.Login]: undefined
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer<AuthStackParamList>>> {}
