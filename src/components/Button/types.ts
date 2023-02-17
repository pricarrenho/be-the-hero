import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  children?: string;
  styleType: ButtonStyleType;
  fullWidth?: boolean;
  icon?: "power" | "trash";
  to?: string;
  as?: React.ElementType;
} & ButtonType;
