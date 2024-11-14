// theme.ts
import { Theme } from '@emotion/react';

export type MaterialComponentsTheme = Theme & {
	palette: {
		primary: {
			500: string;
			700: string;
			50: string;
		};
		neutral: {
			200: string;
			400: string;
		};
		onPrimary: string;
	};
	shadows: string[];
	shape: {
		borderRadius: string;
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

const theme: MaterialComponentsTheme = {
	palette: {
		primary: {
			500: '#6750A4',  // Main primary color
			700: '#5B4290',  // Darker primary for hover states
			50: '#EADDFF',   // Light primary for background hover in text/outlined buttons
		},
		neutral: {
			200: '#E0E0E0',  // Neutral color for disabled background
			400: '#9E9E9E',  // Neutral color for disabled text
		},
		onPrimary: '#FFFFFF', // Text color on primary background
	},
	shadows: [
		'none',  // No shadow
		'0px 1px 3px rgba(0, 0, 0, 0.2)',  // Shadow for filled button
		'0px 4px 6px rgba(0, 0, 0, 0.3)',  // Hover shadow
	],
	shape: {
		borderRadius: '8px', // Rounded corners to match MD3
	},
	typography: {
		fontFamily: `'Roboto', sans-serif`, // Default font family
		fontSize: '16px',  // Default font size
		fontWeightMedium: 500,
		button: {
			textTransform: 'uppercase', // MD3 buttons are uppercase by default
			fontWeight: 500,
		},
	},
};

export default theme;
