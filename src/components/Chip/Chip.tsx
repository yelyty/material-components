/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ChipProps } from "./Chip.types";
import { chipRootStyles, variantStyles, spanStyles } from "./Chip.styles";

const Chip = ({ label, customCss, variant = "outlined" }: ChipProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${chipRootStyles(theme)}
        ${variantStyles(theme, variant)}
        ${customCss}
      `}
    >
      {/* add icon */}
      <span
        css={css`
          ${spanStyles()}
        `}
      >
        {label}
      </span>
      {/* add action button */}
    </div>
  );
};

export default Chip;
