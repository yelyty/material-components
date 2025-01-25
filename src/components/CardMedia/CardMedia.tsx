/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardMediaProps } from "./CardMedia.types";
import { cardMediaStyles } from "./CardMedia.styles";

const CardMedia = ({
  src,
  alt,
  customCss,
  component: Component = "img",
  children,
}: CardMediaProps) => {
  return (
    <Component
      css={css`
        ${cardMediaStyles()}
        ${customCss}
      `}
      src={src}
      alt={alt}
    >
      {children}
    </Component>
  );
};

export default CardMedia;
