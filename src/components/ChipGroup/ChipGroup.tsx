/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { chipGroupStyle } from "./ChipGroup.styles";
import { ChipGroupProps } from "./ChipGroup.types";

const ChipGroup = ({ children, customCss }: ChipGroupProps) => {
  return (
    <div
      css={css`
        ${chipGroupStyle()}
        ${customCss}
      `}
    >
      {children}
    </div>
  );
};

export default ChipGroup;
