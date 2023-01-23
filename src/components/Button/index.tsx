import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ children, size, styleType }: ButtonProps) => {
  return (
    <S.Wrapper size={size} styleType={styleType}>
      {children}
    </S.Wrapper>
  );
};
