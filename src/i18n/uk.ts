import { Translations } from './en'

const uk: Translations = {
	common: {
		ok: 'OK!',
		cancel: 'Скасувати',
		back: 'Назад',
		logOut: 'Вийти',
	},
	alerts: {
		areYouSure: 'Ви впевнені?',
		confirmLogOut: 'Ви дійсно хочете вийти?',
		logOutError: 'Ой! Помилка виходу. Спробуйте ще раз.',
	},
	emptyStateComponent: {
		generic: {
			heading: 'Так порожньо... так сумно',
			content: 'Дані ще не знайдено. Спробуйте натиснути кнопку, щоб оновити або перезавантажити додаток.',
			button: 'Спробуємо ще раз',
		},
	},
	loginScreen: {
		logIn: 'Увійти',
		welcome: 'Ласкаво просимо до Been',
		signInToContinue: 'Увійдіть, щоб продовжити',
		signInWithGoogle: 'Увійти через Google',
	},
	welcomeScreen: {
		postscript:
			'пссс — Це, ймовірно, не те, як виглядає ваш додаток. (Якщо тільки ваш дизайнер не передав вам ці екрани, і в такому випадку, запускайте!)',
		readyForLaunch: 'Ваш додаток майже готовий до запуску!',
		exciting: '(ох, це захоплююче!)',
		letsGo: 'Поїхали!',
	},
	errorScreen: {
		title: 'Щось пішло не так!',
		friendlySubtitle:
			'Це екран, який побачать ваші користувачі в продакшені, коли виникне помилка. Вам потрібно налаштувати це повідомлення (знаходиться в `app/i18n/uk.ts`) і, ймовірно, також макет (`app/screens/ErrorScreen`). Якщо ви хочете повністю видалити це, перевірте `app/app.tsx` для компонента <ErrorBoundary>.',
		reset: 'СКИНУТИ ДОДАТОК',
		traceTitle: 'Помилка зі стеку %{name}',
	},
	bottomTabsNavigator: {
		statsTab: 'Статистика',
		mapTab: 'Карта',
		friendsTab: 'Друзі',
		settingsTab: 'Налаштування',
	},
	settingsScreen: {
		appAppearance: 'Зовнішній вигляд',
		darkTheme: 'Темна тема',
		yourAccount: 'Ваш акаунт',
		logOut: 'Вийти',
	},
}

export default uk
