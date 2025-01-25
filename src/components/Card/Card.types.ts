import { CSSObject } from "@emotion/react";

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
	variant?: CardVariant;
	children: React.ReactNode;
	customCss?: CSSObject;
}