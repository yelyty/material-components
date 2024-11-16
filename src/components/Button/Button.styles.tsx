// Button.styles.ts
import { css, Theme } from "@emotion/react";
import { ButtonVariant } from "./Button.types";

const toRgba = (color: string, alpha: number) => {
  const rgb = color.replace("rgb(", "").replace(")", "").split(",");
  console.log(rgb);
  if (rgb.length !== 3) {
    throw new Error("Invalid color format");
  }
  console.log(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`);
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
};

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
          ? theme.color.onSurface
          : theme.color.primary};
        color: ${disabled
          ? toRgba(theme.color.onSurface, 0.38)
          : theme.color.onPrimary};
        opacity: ${disabled ? 0.12 : 1};
        &:hover {
          box-shadow: ${theme.elevation.level1};
        }
      `;
    case "outlined":
      return css`
        background-color: transparent;
        border: 1px solid ${theme.color.outline};
        color: ${disabled ? theme.color.onSurface : theme.color.primary};
        &:hover {
          background-color: ${theme.color.primary};
          color: ${theme.color.onPrimary};
        }
      `;
    case "text":
      return css`
        background-color: transparent;
        color: ${disabled ? theme.color.onSurface : theme.color.primary};
        opacity: ${disabled ? 0.38 : 1};
        &:hover {
          color: ${theme.color.primary};
        }
        &:focus {
          outline: 2px solid ${theme.color.secondary};
          outline-offset: 2px;
          opacity: ${theme.stateLayer.focus};
        }
      `;
    case "tonal":
      return css`
        background-color: ${theme.color.secondaryContainer};
        color: ${theme.color.onSecondaryContainer};
      `;
    case "elevated":
      return css`
        background-color: ${theme.color.surfaceContainer};
        color: ${theme.color.primary};
        box-shadow: ${theme.elevation.level1};
      `;
    default:
      return css``;
  }
};
