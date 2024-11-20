// theme.ts
import { Theme } from '@emotion/react';


const theme: Theme = {
	color: {
		// Primary colors
		primary: 'rgb(125, 78, 125)',
		onPrimary: 'rgb(255, 255, 255)',
		primaryContainer: 'rgb(255, 214, 250)',
		onPrimaryContainer: 'rgb(50, 9, 54)',

		// Secondary colors
		secondary: 'rgb(108, 88, 106)',
		onSecondary: 'rgb(255, 255, 255)',
		secondaryContainer: 'rgb(245, 219, 240)',
		onSecondaryContainer: 'rgb(38, 22, 37)',

		// Tertiary colors
		tertiary: 'rgb(130, 82, 72)',
		onTertiary: 'rgb(255, 255, 255)',
		tertiaryContainer: 'rgb(255, 218, 211)',
		onTertiaryContainer: 'rgb(51, 17, 11)',

		// Error colors
		error: 'rgb(186, 26, 26)',
		onError: 'rgb(255, 255, 255)',
		errorContainer: 'rgb(255, 218, 214)',
		onErrorContainer: 'rgb(65, 0, 2)',

		// Background and Surface colors
		background: 'rgb(255, 247, 250)',
		onBackground: 'rgb(31, 26, 31)',
		surface: 'rgb(255, 247, 250)',
		onSurface: 'rgb(31, 26, 31)',
		surfaceVariant: 'rgb(237, 222, 232)',
		onSurfaceVariant: 'rgb(77, 68, 76)',

		// Surface containers
		surfaceContainerLowest: 'rgb(255, 255, 255)',
		surfaceContainerLow: 'rgb(252, 240, 247)',
		surfaceContainer: 'rgb(246, 235, 241)',
		surfaceContainerHigh: 'rgb(241, 229, 236)',
		surfaceContainerHighest: 'rgb(235, 223, 230)',
		surfaceDim: 'rgb(226, 215, 222)',
		surfaceBright: 'rgb(255, 247, 250)',

		// Inverse colors
		inverseSurface: 'rgb(53, 46, 52)',
		inverseOnSurface: 'rgb(249, 237, 244)',
		inversePrimary: 'rgb(237, 180, 234)',

		// Outline colors
		outline: 'rgb(127, 116, 124)',
		outlineVariant: 'rgb(208, 195, 204)',

		// Shadows and scrim
		shadow: 'rgb(0, 0, 0)',
		scrim: 'rgb(0, 0, 0)',

		// Fixed colors (custom, if applicable)
		primaryFixed: 'rgb(255, 214, 250)',
		onPrimaryFixed: 'rgb(50, 9, 54)',
		primaryFixedDim: 'rgb(237, 180, 234)',
		onPrimaryFixedVariant: 'rgb(99, 54, 100)',
		secondaryFixed: 'rgb(245, 219, 240)',
		onSecondaryFixed: 'rgb(38, 22, 37)',
		secondaryFixedDim: 'rgb(216, 191, 212)',
		onSecondaryFixedVariant: 'rgb(83, 65, 82)',
		tertiaryFixed: 'rgb(255, 218, 211)',
		onTertiaryFixed: 'rgb(51, 17, 11)',
		tertiaryFixedDim: 'rgb(246, 184, 171)',
		onTertiaryFixedVariant: 'rgb(103, 59, 50)',

		// Extended custom colors
		customColor: 'rgb(58, 96, 143)',
		onCustomColor: 'rgb(255, 255, 255)',
		customColorContainer: 'rgb(211, 227, 255)',
		onCustomColorContainer: 'rgb(0, 28, 57)',
	},
	elevation: {
		level0: 'none',
		level1: '0px 1px 1px rgba(0, 0, 0, 0.2)',    // 1dp elevation
		level2: '0px 1px 2px rgba(0, 0, 0, 0.2)',    // 3dp elevation
		level3: '0px 1px 3px rgba(0, 0, 0, 0.2)',    // 6dp elevation
		level4: '0px 2px 4px rgba(0, 0, 0, 0.2)',    // 8dp elevation
		level5: '0px 4px 6px rgba(0, 0, 0, 0.3)',    // 12dp elevation
	},
	shape: {
		corner: {
			full: '1000px',
		},
	},
	stateLayer: {
		hover: 'rgba(125, 78, 125, 0.08)',      // 8% opacity for hover
		focus: 'rgba(125, 78, 125, 0.12)',      // 12% opacity for focus
		pressed: 'rgba(125, 78, 125, 0.12)',    // 12% opacity for pressed
		selected: 'rgba(125, 78, 125, 0.16)',   // 16% opacity for selected
		dragged: 'rgba(125, 78, 125, 0.16)',    // 16% opacity for dragged
	},
	typography: {
		body: {
			large: {
				lineHeight: '24px',
				fontSize: '16px',
				letterSpacing: '0.5px',
			},
			medium: {
				lineHeight: '20px',
				fontSize: '14px',
				letterSpacing: '0.25px',
			}
		}

	},
};

export default theme;
