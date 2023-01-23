import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";
type WrapperProps = Pick<ButtonProps, "size" | "styleType">;

const WrapperModifier = {
  small: () => css`
    height: 60px;
    width: 166px;
  `,
  medium: () => css`
    height: 60px;
    width: 263px;
  `,
  large: () => css`
    height: 60px;
    width: 351px;
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.Neutral200};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.Neutral200};
    color: ${theme.colors.gray900};
    border: 2px solid ${theme.colors.Neutral100};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, styleType }) => css`
    border-radius: 8px;
    border: none;
    margin: 4px;
    font-size: ${theme.font.sizes.md};

    ${size && WrapperModifier[size]()}
    ${styleType && WrapperModifier[styleType](theme)}
  `}
`;
