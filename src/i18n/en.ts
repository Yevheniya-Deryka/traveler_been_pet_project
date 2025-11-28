const en = {
	common: {
		ok: 'OK!',
		cancel: 'Cancel',
		back: 'Back',
		logOut: 'Log Out',
	},
	alerts: {
		areYouSure: 'Are you sure?',
		confirmLogOut: 'Do you really want to log out?',
		logOutError: 'Oops! Log out error. Try again.',
		imagePickerError: 'An error occurred while picking the image. Please try again.',
	},
	emptyStateComponent: {
		generic: {
			heading: 'So empty... so sad',
			content: 'No data found yet. Try clicking the button to refresh or reload the app.',
			button: "Let's try this again",
		},
	},
	loginScreen: {
		logIn: 'Log In',
		welcome: 'Welcome to Been',
		signInToContinue: 'Sign in to continue',
		signInWithGoogle: 'Sign in with Google',
	},
	welcomeScreen: {
		postscript:
			"psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
		readyForLaunch: 'Your app, almost ready for launch!',
		exciting: '(ohh, this is exciting!)',
		letsGo: "Let's go!",
	},
	errorScreen: {
		title: 'Something went wrong!',
		friendlySubtitle:
			"This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
		reset: 'RESET APP',
		traceTitle: 'Error from %{name} stack',
	},
	bottomTabsNavigator: {
		statsTab: 'Stats',
		mapTab: 'Map',
		friendsTab: 'Friends',
		settingsTab: 'Settings',
	},
	settingsScreen: {
		appAppearance: 'Appearance',
		darkTheme: 'Dark Theme',
		yourAccount: 'Your Account',
		logOut: 'Log Out',
	},
	newPlaceScreen: {
		placeName: 'Place Name',
		placeNamePlaceholder: 'Enter place name',
		dateVisited: 'Date Visited',
		selectDate: 'Select date',
		coverPhoto: 'Cover Photo',
		pickCoverPhoto: 'Pick cover photo',
		coverPhotoSelected: 'Cover photo selected',
		note: 'Note',
		addNote: 'Add a note',
		privacy: 'Privacy',
		public: 'Public',
		private: 'Private',
		photos: 'Photos',
		addPhotos: 'Add photos',
		photosAdded: '{{count}} photo(s) added',
		savePlace: 'Save Place',
	},
}

export default en
export type Translations = typeof en
