import { css, Theme } from "@emotion/react";

export const listStyles = css`
  padding-top: 8px;
  padding-bottom: 8px;
  list-style-type: none;
  margin: 0;
  box-sizing: border-box;
`;

export const listItemStyles = css`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 56px;
  box-sizing: border-box;

  /* Styling the Headline and SupportingText to stack */
  & > .text-group {
    display: flex;
    flex-direction: column;
    gap: 4px; /* Spacing between headline and supporting text */
  }
`;

export const dividerStyles = css`
  width: 100%;
`;

export const headlineStyles = (theme: Theme) => {
  return css`
    color: ${theme.color.onSurface};
    margin: 0;
    ${css(theme.typography.body.large)};
  `;
};

export const supportingTextStyles = (theme: Theme) => {
  return css`
    color: ${theme.color.onSurfaceVariant};
    margin: 0;
    ${css(theme.typography.body.medium)};
  `;
};
