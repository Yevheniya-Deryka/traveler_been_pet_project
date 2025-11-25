import { Translations } from './en'

const uk: Translations = {
	common: {
		ok: 'OK!',
		cancel: 'Скасувати',
		back: 'Назад',
		logOut: 'Вийти',
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
	emptyStateComponent: {
		generic: {
			heading: 'Так порожньо... так сумно',
			content: 'Дані ще не знайдено. Спробуйте натиснути кнопку, щоб оновити або перезавантажити додаток.',
			button: 'Спробуємо ще раз',
		},
	},

	errors: {
		invalidEmail: 'Невірна адреса електронної пошти.',
	},
	loginScreen: {
		logIn: 'Увійти',
		welcome: 'Ласкаво просимо до Been',
		signInToContinue: 'Увійдіть, щоб продовжити',
		signInWithGoogle: 'Увійти через Google',
		enterDetails:
			'Введіть свої дані нижче, щоб розблокувати секретну інформацію. Ви ніколи не вгадаєте, що ми приготували. Або, можливо, вгадаєте; це не ракетобудування.',
		emailFieldLabel: 'Електронна пошта',
		passwordFieldLabel: 'Пароль',
		emailFieldPlaceholder: 'Введіть вашу адресу електронної пошти',
		passwordFieldPlaceholder: 'Супер секретний пароль тут',
		tapToLogIn: 'Натисніть, щоб увійти!',
		hint: 'Підказка: ви можете використовувати будь-яку адресу електронної пошти та свій улюблений пароль :)',
	},
	bottomTabsNavigator: {
		statsTab: 'Статистика',
		mapTab: 'Карта',
		friendsTab: 'Друзі',
		settingsTab: 'Налаштування',
	},
	settingsScreen: {
		switchToLightTheme: 'Перемкнути на світлу тему',
		switchToDarkTheme: 'Перемкнути на темну тему',
	},
	demoCommunityScreen: {
		title: "Зв'яжіться зі спільнотою",
		tagLine:
			'Підключіться до спільноти React Native інженерів Infinite Red та підвищте рівень розробки додатків разом з нами!',
		joinUsOnSlackTitle: 'Приєднуйтесь до нас у Slack',
		joinUsOnSlack:
			"Хочете місце для зв'язку з React Native інженерами по всьому світу? Приєднуйтесь до розмови в Infinite Red Community Slack! Наша зростаюча спільнота - це безпечний простір для постановки питань, навчання у інших та розширення вашої мережі.",
		joinSlackLink: 'Приєднатися до спільноти Slack',
		makeIgniteEvenBetterTitle: 'Зробіть Ignite ще кращим',
		makeIgniteEvenBetter:
			'Є ідея, як зробити Ignite ще кращим? Ми раді це почути! Ми завжди шукаємо тих, хто хоче допомогти нам створити найкращі інструменти React Native. Приєднуйтесь до нас на GitHub, щоб разом будувати майбутнє Ignite.',
		contributeToIgniteLink: 'Внести внесок у Ignite',
		theLatestInReactNativeTitle: 'Останні новини React Native',
		theLatestInReactNative: 'Ми тут, щоб тримати вас в курсі всього, що пропонує React Native.',
		reactNativeRadioLink: 'React Native Radio',
		reactNativeNewsletterLink: 'React Native Newsletter',
		reactNativeLiveLink: 'React Native Live',
		chainReactConferenceLink: 'Chain React Conference',
		hireUsTitle: 'Найміть Infinite Red для вашого наступного проекту',
		hireUs:
			'Чи це повний проект, чи навчання команд за допомогою нашого практичного тренінгу, Infinite Red може допомогти з майже будь-яким React Native проектом.',
		hireUsLink: 'Надішліть нам повідомлення',
	},
	demoShowroomScreen: {
		jumpStart: 'Компоненти для швидкого старту вашого проекту!',
		lorem2Sentences:
			'Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.',
		demoHeaderTxExample: 'Ура',
		demoViaTxProp: 'Через `tx` Prop',
		demoViaSpecifiedTxProp: 'Через `{{prop}}Tx` Prop',
	},
	demoDebugScreen: {
		howTo: 'ЯК',
		title: 'Відлагодження',
		tagLine: 'Вітаємо, у вас тут дуже просунутий шаблон React Native додатку. Скористайтеся цим шаблоном!',
		reactotron: 'Відправити в Reactotron',
		reportBugs: 'Повідомити про помилки',
		demoList: 'Демо список',
		demoPodcastList: 'Демо список подкастів',
		androidReactotronHint:
			'Якщо це не працює, переконайтеся, що настільний додаток Reactotron запущено, виконайте adb reverse tcp:9090 tcp:9090 з вашого терміналу та перезавантажте додаток.',
		iosReactotronHint:
			'Якщо це не працює, переконайтеся, що настільний додаток Reactotron запущено та перезавантажте додаток.',
		macosReactotronHint:
			'Якщо це не працює, переконайтеся, що настільний додаток Reactotron запущено та перезавантажте додаток.',
		webReactotronHint:
			'Якщо це не працює, переконайтеся, що настільний додаток Reactotron запущено та перезавантажте додаток.',
		windowsReactotronHint:
			'Якщо це не працює, переконайтеся, що настільний додаток Reactotron запущено та перезавантажте додаток.',
	},
	demoPodcastListScreen: {
		title: 'Епізоди React Native Radio',
		onlyFavorites: 'Показати лише улюблені',
		favoriteButton: 'Улюблене',
		unfavoriteButton: 'Прибрати з улюблених',
		accessibility: {
			cardHint:
				'Подвійне натискання для прослуховування епізоду. Подвійне натискання та утримання для {{action}} цього епізоду.',
			switch: 'Увімкнути, щоб показувати лише улюблені',
			favoriteAction: 'Перемкнути улюблене',
			favoriteIcon: 'Епізод не додано до улюблених',
			unfavoriteIcon: 'Епізод додано до улюблених',
			publishLabel: 'Опубліковано {{date}}',
			durationLabel: 'Тривалість: {{hours}} годин {{minutes}} хвилин {{seconds}} секунд',
		},
		noFavoritesEmptyState: {
			heading: 'Це виглядає трохи порожньо',
			content: 'Улюблені ще не додані. Натисніть на серце на епізоді, щоб додати його до улюблених!',
		},
	},
}

export default uk
