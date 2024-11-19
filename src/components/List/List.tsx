import { ReactElement } from "react";

type ListProps = {
  children: React.ReactNode;
};
const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>;
};

type ItemProps = {
  children: [
    ReactElement<typeof Headline>,
    ReactElement<typeof SupportingText>?,
    ReactElement<typeof TrailingSupportingText>?,
    ReactElement<typeof LeadingIcon>?,
    ReactElement<typeof LeadingAvatar>?,
    ReactElement<typeof TrailingIcon>?,
  ];
};
const Item = ({ children }: ItemProps) => {
  return <li>{children}</li>;
};

type HeadlineProps = {
  text: string;
};

const Headline = ({ text }: HeadlineProps) => {
  return <h1>{text}</h1>;
};

type SupportingTextProps = {
  text: string;
};
const SupportingText = ({ text }: SupportingTextProps) => {
  return <p>{text}</p>;
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

List.Item = Item;
List.Headline = Headline;
List.SupportingText = SupportingText;
List.TrailingSupportingText = TrailingSupportingText;
List.LeadingIcon = LeadingIcon;
List.LeadingAvatar = LeadingAvatar;
List.TrailingIcon = TrailingIcon;
List.Divider = Divider;

export default List;
