import * as S from "./styles";

type Props = {
  children: React.ReactNode | string;
};
export const Box = ({ children, ...props }: Props) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
