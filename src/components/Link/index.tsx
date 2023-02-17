import { Link as LinkRoutes } from "react-router-dom";
import { ArrowLeft } from "../../assets/svg/ArrowLeft";
import { ArrowRight } from "../../assets/svg/ArrowRight";
import { LinkProps } from "./types";
import * as S from "./styles";
import { useTheme } from "styled-components";

export const Link = ({ children, to, icon }: LinkProps) => {
  const theme = useTheme();

  const icons = {
    ArrowRight: <ArrowRight color={theme.colors.red800} />,
    ArrowLeft: <ArrowLeft color={theme.colors.red800} />,
  };
  return (
    <S.Wrapper>
      <LinkRoutes to={to as any}>
        {icon && icons[icon]} {children}
      </LinkRoutes>
    </S.Wrapper>
  );
};
