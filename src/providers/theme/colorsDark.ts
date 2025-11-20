const palette = {
	neutral100: "#1A1D21",
	neutral200: "#2B2F35",
	neutral300: "#3D424A",
	neutral400: "#515761",
	neutral500: "#6A727E",
	neutral600: "#8E96A3",
	neutral700: "#B3BAC4",
	neutral800: "#D8DDE4",
	neutral900: "#F5F7FA",

	primary100: "#004C66",
	primary200: "#006D8F",
	primary300: "#0092B8",
	primary400: "#25B6D9",
	primary500: "#64D4F1",
	primary600: "#A6E7F9",

	secondary100: "#663B00",
	secondary200: "#995700",
	secondary300: "#CC7200",
	secondary400: "#FF9B3C",
	secondary500: "#FFC680",

	accent100: "#004C40",
	accent200: "#007A65",
	accent300: "#00AA8F",
	accent400: "#2DC3AA",
	accent500: "#6AD7C3",

	angry100: "#5C1A16",
	angry500: "#E53935",

	overlay20: "rgba(245, 247, 250, 0.2)",
	overlay50: "rgba(245, 247, 250, 0.5)",
} as const

export const colors = {
	palette,
	transparent: "rgba(0, 0, 0, 0)",
	text: palette.neutral800,
	textDim: palette.neutral600,
	background: palette.neutral200,
	border: palette.neutral400,
	tint: palette.primary300,
	tintInactive: palette.neutral500,
	separator: palette.neutral300,
	error: palette.angry500,
	errorBackground: palette.angry100,
} as const
