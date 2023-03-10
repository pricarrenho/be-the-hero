import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
  $fullWidth: boolean;
};

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

  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.Neutral200};
    color: ${theme.colors.gray900};
    border: none;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, $styleType, $fullWidth }) => css`
    border-radius: 8px;
    cursor: pointer;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-sizing: border-box;
    height: 60px;
    font-size: ${theme.font.sizes.md};

    ${$styleType && WrapperModifier[$styleType](theme)}
    ${$fullWidth && WrapperModifier.fullWidth()}

    &:disabled {
      background-color: ${theme.colors.gray800};
      cursor: not-allowed;
    }
  `}
`;
