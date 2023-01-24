import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  size,
  styleType,
  fullWidth,
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} styleType={styleType} fullWidth={fullWidth}>
      {children}
    </S.Wrapper>
  );
};
