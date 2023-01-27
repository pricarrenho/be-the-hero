import * as S from "./styles";
import { TitleProps } from "./types";

export const Title = ({ children }: TitleProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
