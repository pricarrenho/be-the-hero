import * as S from "./styles";
import { BoxProps } from "./types";

export const Box = ({ children, ...props }: BoxProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
