/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardContainerStyles, variantStyles } from "./Card.styles";
import { CardProps } from "./Card.types";
import { useTheme } from "@emotion/react";

const Card = ({ variant = "elevated", children, customCss }: CardProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${customCss}
        ${cardContainerStyles(theme)}
		${variantStyles(variant, theme)}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
