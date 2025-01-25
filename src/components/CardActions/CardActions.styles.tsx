import { css } from "@emotion/react";

export const cardActionsStyles = (
  justifyContent = "flex-end",
  alignItems = "end",
  gap = 10
) => css`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  gap: ${gap}px;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;
