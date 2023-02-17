import { useTheme } from "styled-components";
import { Power } from "../../assets/svg/Power";
import { Trash } from "../../assets/svg/Trash";
import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  fullWidth,
  icon,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const icons = {
    power: <Power color={theme.colors.red800} />,
    trash: <Trash color={theme.colors.gray700} size={24} />,
  };

  return (
    <S.Wrapper $styleType={styleType} $fullWidth={fullWidth} {...props}>
      {icon && icons[icon]} {children}
    </S.Wrapper>
  );
};
