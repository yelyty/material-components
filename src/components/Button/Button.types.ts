export type ButtonVariant = "filled" | "outlined" | "text" | "tonal" | "elevated";

export interface ButtonProps {
	variant?: ButtonVariant;
	label: string;
	onClick: () => void;
	disabled?: boolean;
}