import { css, Theme } from "@emotion/react";

export const chipRootStyles = (theme: Theme) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  height: 32px;
  box-sizing: border-box;
`;

export const variantStyles = (theme: Theme, variant: string) => {
  switch (variant) {
    case "outlined":
      return css`
        border: 1px solid ${theme.color.outlineVariant};
      `;
    case "elevated":
      return css`
        background-color: ${theme.color.surfaceContainerLow};
        box-shadow: ${theme.elevation.level1};
      `;
  }
};

export const spanStyles = () => css`
  padding: 0px;
  margin: 0px;
`;
