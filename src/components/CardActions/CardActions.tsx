/** @jsxImportSource @emotion/react */
import { cardActionsStyles } from "./CardActions.styles";
import { CardActionsProps } from "./CardActions.types";
import { css } from "@emotion/react";

const CardActions = ({
  children,
  justifyContent,
  alignItems,
  gap,
}: CardActionsProps) => {
  return (
    <div
      css={css`
        ${cardActionsStyles(justifyContent, alignItems, gap)}
      `}
    >
      {children}
    </div>
  );
};

export default CardActions;
