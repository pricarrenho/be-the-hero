import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: string;
  styleType: "primary" | "secondary";
  fullWidth?: boolean;
  icon?: "Power";
  to?: string;
  as?: React.ElementType;
} & ButtonType;
