import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ type, name, placeholder, ...props }: InputProps) => {
  return (
    <S.Wrapper name={name} type={type} placeholder={placeholder} {...props} />
  );
};
