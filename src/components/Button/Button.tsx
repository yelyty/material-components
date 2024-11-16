/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React from "react";
import { baseButtonStyles, variantStyles } from "./Button.styles";
import { ButtonVariant } from "./Button.types";

interface ButtonProps {
  variant?: ButtonVariant;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

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
      {label}
    </button>
  );
};

export default Button;
