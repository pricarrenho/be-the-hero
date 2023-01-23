import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ type, name, value }: InputProps) => {
  return (
    <div>
      <S.Wrapper id={name} name={name} type={type} value={value} />
    </div>
  );
};
