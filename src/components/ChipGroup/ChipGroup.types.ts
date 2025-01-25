import React from "react";
import { CSSObject } from "@emotion/react";
import { Chip } from "../Chip";


export interface ChipGroupProps {
	children: React.ReactElement<typeof Chip>[];
	customCss?: CSSObject;
}