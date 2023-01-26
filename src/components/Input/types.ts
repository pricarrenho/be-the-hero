import React from "react";

export type InputProps = {
  type?: string;
  name: string;
  placeholder: string;
  size?: "medium" | "large";
  as?: React.ElementType;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  columns?: number;
};
