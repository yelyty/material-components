import { css, Theme } from "@emotion/react";

export const cardContainerStyles = (theme: Theme) => css`
  background-color: ${theme.color.surfaceContainerLow};
  border-radius: 12px;
  text-align: start;
  overflow: hidden;
`;

export const variantStyles = (type: string, theme: Theme) => {
  switch (type) {
    case "elevated":
      return css`
        box-shadow: ${theme.elevation.level1};
      `;
    case "outlined":
      return css`
        background-color: ${theme.color.surface};
        border: 1px solid ${theme.color.outlineVariant};
      `;
    case "filled":
      return css`
        background-color: ${theme.color.surfaceContainerHighest};
      `;
    default:
      return css`
        background-color: ${theme.color.surfaceContainerLow};
      `;
  }
};
