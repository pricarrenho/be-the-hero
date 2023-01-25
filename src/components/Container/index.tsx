import * as S from "./styles";
import { ContainerProps } from "./types";

export const Container = ({ children, ...props }: ContainerProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
