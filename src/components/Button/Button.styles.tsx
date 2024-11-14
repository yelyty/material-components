// Button.styles.ts
import { css } from "@emotion/react";
import { ButtonVariant } from "./Button.types";
import type { MaterialComponentsTheme } from "../theme";

// Shared button styles
export const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px; // Rounded corner, according to MD3
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.2s ease;
`;

// Variant styles
export const variantStyles = (
  variant: ButtonVariant,
  theme: MaterialComponentsTheme,
  disabled: boolean
) => {
  switch (variant) {
    case "filled":
      return css`
        background-color: ${disabled
          ? theme.palette.neutral[200]
          : theme.palette.primary[500]};
        color: ${disabled
          ? theme.palette.neutral[400]
          : theme.palette.onPrimary};
        box-shadow: ${!disabled ? theme.shadows[1] : "none"};
        &:hover {
          background-color: ${theme.palette.primary[700]};
          box-shadow: ${theme.shadows[2]};
        }
      `;
    case "outlined":
      return css`
        background-color: transparent;
        border: 1px solid ${theme.palette.primary[500]};
        color: ${disabled
          ? theme.palette.neutral[400]
          : theme.palette.primary[500]};
        &:hover {
          background-color: ${theme.palette.primary[50]};
        }
      `;
    case "text":
      return css`
        background-color: transparent;
        color: ${disabled
          ? theme.palette.neutral[400]
          : theme.palette.primary[500]};
        &:hover {
          background-color: ${theme.palette.primary[50]};
        }
      `;
    default:
      return css``;
  }
};
