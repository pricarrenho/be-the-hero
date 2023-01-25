import { Power } from "../../assets/svg/Power";
import * as S from "./styles";
import { ButtonProps } from "./types";

const icons = {
  Power: <Power color="#E02041" />,
};

export const Button = ({
  children,
  styleType,
  fullWidth,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper styleType={styleType} fullWidth={fullWidth} {...props}>
      {icon && icons[icon]} {children}
    </S.Wrapper>
  );
};
