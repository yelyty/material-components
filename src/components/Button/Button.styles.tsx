// Button.styles.ts
import { css, Theme } from "@emotion/react";
import { ButtonVariant } from "./Button.types";

// Shared button styles
export const baseButtonStyles = (theme: Theme) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-radius: ${theme.shape.corner.full};
  box-shadow: ${theme.elevation.level0};
  border: none;
  gap: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.2s ease;
`;

// Variant styles
export const variantStyles = (
  variant: ButtonVariant,
  theme: Theme,
  disabled: boolean
) => {
  switch (variant) {
    case "filled":
      return css`
        background-color: ${disabled
          ? `rgb(228, 227, 228)`
          : theme.color.primary};
        color: ${disabled ? theme.color.onSurface : theme.color.onPrimary};
        box-shadow: ${disabled
          ? theme.elevation.level0
          : theme.elevation.level1};

        ${!disabled &&
        css`
          &:hover {
            box-shadow: ${theme.elevation.level1};
          }
          &:focus {
            outline: 2px solid ${theme.color.secondary};
            outline-offset: 2px;
            opacity: ${theme.stateLayer.focus};
          }
        `}
      `;
    case "outlined":
      return css`
        background-color: transparent;
        border: 1px solid
          ${disabled ? "rgb(228, 227, 228)" : theme.color.outline};
        color: ${disabled ? theme.color.onSurface : theme.color.primary};

        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color.primary};
            color: ${theme.color.onPrimary};
          }
        `}
      `;
    case "text":
      return css`
        background-color: transparent;
        color: ${disabled ? theme.color.onSurface : theme.color.primary};

        ${!disabled &&
        css`
          &:hover {
            color: ${theme.color.primary};
          }
          &:focus {
            outline: 2px solid ${theme.color.secondary};
            outline-offset: 2px;
            opacity: ${theme.stateLayer.focus};
          }
        `}
      `;
    case "tonal":
      return css`
        background-color: ${theme.color.secondaryContainer};
        color: ${theme.color.onSecondaryContainer};
        opacity: ${disabled ? 0.38 : 1};
      `;
    case "elevated":
      return css`
        background-color: ${theme.color.surfaceContainer};
        color: ${theme.color.primary};
        box-shadow: ${disabled
          ? theme.elevation.level0
          : theme.elevation.level1};

        ${!disabled &&
        css`
          &:hover {
            box-shadow: ${theme.elevation.level2};
          }
        `}
      `;
    default:
      return css``;
  }
};

// Button label style
export const labelStyles = (variant: ButtonVariant, disabled: boolean) => {
  switch (variant) {
    case "filled":
      return css`
        opacity: ${disabled ? 0.38 : 1};
      `;
    case "outlined":
      return css`
        opacity: ${disabled ? 0.38 : 1};
      `;
    case "text":
      return css`
        opacity: ${disabled ? 0.38 : 1};
      `;
    case "tonal":
      return css`
        opacity: ${disabled ? 0.38 : 1};
      `;
    case "elevated":
      return css`
        opacity: ${disabled ? 0.38 : 1};
      `;
    default:
      return css``;
  }
};
