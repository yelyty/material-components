import { CSSObject } from "@emotion/react";

export const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
export const IMAGE_COMPONENTS = ['picture', 'img'];

export interface CardMediaProps {
	src: string;
	alt: string;
	customCss?: CSSObject;
	component?: React.ElementType;
	children?: React.ReactNode;
}