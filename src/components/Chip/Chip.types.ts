import { CSSObject } from "@emotion/react";

export type ChipVariant = "outlined" | "elevated";

export interface ChipProps {
	label: string;
	customCss?: CSSObject;
	variant?: ChipVariant;
}