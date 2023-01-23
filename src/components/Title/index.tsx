import * as S from "./styles";
import { TitleProps } from "./types";

export const Title = ({ children }: TitleProps) => {
  return (
    <div>
      <S.Wrapper>{children}</S.Wrapper>
    </div>
  );
};
