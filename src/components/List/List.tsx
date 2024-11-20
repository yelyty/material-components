/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ReactElement } from "react";
import {
  listItemStyles,
  listStyles,
  headlineStyles,
  supportingTextStyles,
} from "./List.styles";

type ListProps = {
  children: React.ReactElement;
};
const List = ({ children }: ListProps) => {
  return (
    <ul
      css={css`
        ${listStyles}
      `}
    >
      {children}
    </ul>
  );
};

type ItemProps = {
  children:
    | ReactElement<typeof Headline>
    | [
        ReactElement<typeof Headline>,
        ReactElement<typeof SupportingText>?,
        ReactElement<typeof TrailingSupportingText>?,
        ReactElement<typeof LeadingIcon>?,
        ReactElement<typeof LeadingAvatar>?,
        ReactElement<typeof TrailingIcon>?,
      ];
};
const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <li
      css={css`
        ${listItemStyles}
      `}
    >
      {children}
    </li>
  );
};

type LeadingMedia = {
  url: string;
};

const LeadingMedia = ({ url }: LeadingMedia) => {
  return <img src={url} />;
};

type HeadlineProps = {
  text: string;
};

const Headline = ({ text }: HeadlineProps) => {
  const theme = useTheme();
  return (
    <h3
      className="text-group"
      css={css`
        ${headlineStyles(theme)}
      `}
    >
      {text}
    </h3>
  );
};

type SupportingTextProps = {
  text: string;
};
const SupportingText = ({ text }: SupportingTextProps) => {
  const theme = useTheme();
  return (
    <p
      css={`
        ${supportingTextStyles(theme)}
      `}
    >
      {text}
    </p>
  );
};

type TrailingSupportingTextProps = {
  text: string;
};

const TrailingSupportingText = ({ text }: TrailingSupportingTextProps) => {
  return <span>{text}</span>;
};

type LeadingIconProps = {
  icon: ReactElement;
};

const LeadingIcon = ({ icon }: LeadingIconProps) => {
  return <span>{icon}</span>;
};

type LeadingAvatarProps = {
  label: string;
};

const LeadingAvatar = ({ label }: LeadingAvatarProps) => {
  return <span>{label}</span>;
};

type TrailingIconProps = {
  icon: ReactElement;
};

const TrailingIcon = ({ icon }: TrailingIconProps) => {
  return <span>{icon}</span>;
};

const Divider = () => {
  return <hr />;
};

type TrailingSelectionControlProps = {
  children: React.ReactNode;
};

const TrailingSelectionControl = ({
  children,
}: TrailingSelectionControlProps) => {
  return <>{children}</>;
};

List.Item = Item;
List.LeadingMedia = LeadingMedia;
List.Headline = Headline;
List.SupportingText = SupportingText;
List.TrailingSupportingText = TrailingSupportingText;
List.LeadingIcon = LeadingIcon;
List.LeadingAvatar = LeadingAvatar;
List.TrailingIcon = TrailingIcon;
List.Divider = Divider;
List.TrailingSelectionControl = TrailingSelectionControl;

export default List;
