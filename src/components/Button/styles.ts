import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";

type WrapperProps = Pick<ButtonProps, "styleType" | "fullWidth">;

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.red800};
    color: ${theme.colors.Neutral200};

    &:hover {
      background-color: ${theme.colors.red900};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.Neutral200};
    color: ${theme.colors.gray900};
    border: 2px solid ${theme.colors.Neutral100};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, styleType, fullWidth }) => css`
    border-radius: 8px;
    cursor: pointer;
    padding: 20px;
    border: none;
    height: 60px;
    font-size: ${theme.font.sizes.md};

    ${styleType && WrapperModifier[styleType](theme)}
    ${fullWidth && WrapperModifier.fullWidth()}
  `}
`;
