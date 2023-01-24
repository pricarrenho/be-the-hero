import { Link as LinkRoutes } from "react-router-dom";
import { ArrowLeft } from "../../assets/svg/ArrowLeft";
import { ArrowRight } from "../../assets/svg/ArrowRight";

import * as S from "./styles";
import { LinkProps } from "./types";

const icons = {
  ArrowRight: <ArrowRight color="#E02041" />,
  ArrowLeft: <ArrowLeft color="#E02041" />,
};

export const Link = ({ children, to, icon }: LinkProps) => {
  return (
    <S.Wrapper>
      <LinkRoutes to={to as any}>
        {icon && icons[icon]} {children}
      </LinkRoutes>
    </S.Wrapper>
  );
};
