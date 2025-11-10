const palette = {
	neutral100: "#FFFFFF",
	neutral200: "#F5F7FA",
	neutral300: "#E4E8EE",
	neutral400: "#C7CED9",
	neutral500: "#9BA4B1",
	neutral600: "#6E7785",
	neutral700: "#4A5059",
	neutral800: "#2D3238",
	neutral900: "#1A1D21",

	primary100: "#E3F6FB",
	primary200: "#B5E7F4",
	primary300: "#7FD3EC",
	primary400: "#47BEE3",
	primary500: "#1EA8D6",
	primary600: "#008EBE",

	secondary100: "#FFF2E5",
	secondary200: "#FFD8B3",
	secondary300: "#FFB874",
	secondary400: "#FF9B3C",
	secondary500: "#F9820F",

	accent100: "#D9F5F0",
	accent200: "#A6E9DC",
	accent300: "#6AD7C3",
	accent400: "#2DC3AA",
	accent500: "#00AA8F",

	angry100: "#FFE2DD",
	angry500: "#E53935",

	overlay20: "rgba(26, 29, 33, 0.2)",
	overlay50: "rgba(26, 29, 33, 0.5)",
} as const

export const colors = {
	/**
	 * The palette is available to use, but prefer using the name.
	 * This is only included for rare, one-off cases. Try to use
	 * semantic names as much as possible.
	 */
	palette,
	/**
	 * A helper for making something see-thru.
	 */
	transparent: "rgba(0, 0, 0, 0)",
	/**
	 * The default text color in many components.
	 */
	text: palette.neutral800,
	/**
	 * Secondary text information.
	 */
	textDim: palette.neutral600,
	/**
	 * The default color of the screen background.
	 */
	background: palette.neutral200,
	/**
	 * The default border color.
	 */
	border: palette.neutral400,
	/**
	 * The main tinting color.
	 */
	tint: palette.primary500,
	/**
	 * The inactive tinting color.
	 */
	tintInactive: palette.neutral300,
	/**
	 * A subtle color used for lines.
	 */
	separator: palette.neutral300,
	/**
	 * Error messages.
	 */
	error: palette.angry500,
	/**
	 * Error Background.
	 */
	errorBackground: palette.angry100,
} as const
