import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		color: {
			// Primary color
			primary: string;
			onPrimary: string;
			primaryContainer: string;
			onPrimaryContainer: string;

			// Secondary color
			secondary: string;
			onSecondary: string;
			secondaryContainer: string;
			onSecondaryContainer: string;

			// Tertiary color
			tertiary: string;
			onTertiary: string;
			tertiaryContainer: string;
			onTertiaryContainer: string;

			// Error color
			error: string;
			onError: string;
			errorContainer: string;
			onErrorContainer: string;

			// Background and Surface colors
			background: string;
			onBackground: string;
			surface: string;
			onSurface: string;
			surfaceVariant: string;
			onSurfaceVariant: string;

			// Surface containers
			surfaceContainerLowest: string;
			surfaceContainerLow: string;
			surfaceContainer: string;
			surfaceContainerHigh: string;
			surfaceContainerHighest: string;
			surfaceDim: string;
			surfaceBright: string;

			// Inverse colors
			inverseSurface: string;
			inverseOnSurface: string;
			inversePrimary: string;

			// Outline colors
			outline: string;
			outlineVariant: string;

			// Shadows and scrim
			shadow: string;
			scrim: string;

			// Fixed colors (custom, if applicable)
			primaryFixed: string;
			onPrimaryFixed: string;
			primaryFixedDim: string;
			onPrimaryFixedVariant: string;
			secondaryFixed: string;
			onSecondaryFixed: string;
			secondaryFixedDim: string;
			onSecondaryFixedVariant: string;
			tertiaryFixed: string;
			onTertiaryFixed: string;
			tertiaryFixedDim: string;
			onTertiaryFixedVariant: string;

			// Extended custom colors
			customColor: string;
			onCustomColor: string;
			customColorContainer: string;
			onCustomColorContainer: string;
		};
		elevation: {
			level0: string;
			level1: string;
			level2: string;
			level3: string;
			level4: string;
			level5: string;
		};
		shape: {
			corner: {
				full: string;
			};
		};
		stateLayer: {
			hover: string;
			focus: string;
			pressed: string;
			selected: string;
			dragged: string;
		};
		typography: {
			fontFamily: string;
			fontSize: string;
			fontWeightMedium: number;
			button: {
				textTransform: string;
				fontWeight: number;
			};
		};
	}
}
