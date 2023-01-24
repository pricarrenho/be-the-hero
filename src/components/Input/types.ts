import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type InputType =
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  type?: string;
  name: string;
  placeholder: string;
  size?: "medium" | "large";
  as?: React.ElementType;
} & InputType;
