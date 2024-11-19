/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React from "react";
import { baseButtonStyles, labelStyles, variantStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  label,
  onClick,
  disabled = false,
}) => {
  const theme = useTheme();

  return (
    <button
      css={css`
        ${baseButtonStyles(theme)};
        ${variantStyles(variant, theme, disabled)};
      `}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span
        css={css`
          ${labelStyles(variant, disabled)};
        `}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
