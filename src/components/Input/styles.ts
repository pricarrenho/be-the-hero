import styled, { css, DefaultTheme } from "styled-components";

type LabelProps = {
  active: boolean;
};

const LabelModifier = {
  active: (theme: DefaultTheme) => css`
    top: 0px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.Neutral200} 0% 50%,
      ${theme.colors.white} 50% 100%
    );
  `,
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    textarea {
      padding-top: 24px;
      padding-bottom: 24px;
      margin-bottom: 4px;
    }
  `};
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, active }) => css`
    position: absolute;
    top: 30px;
    left: 24px;
    transform: translateY(-50%);
    transition: 0.3s;
    padding: 0px 4px;
    color: ${theme.colors.gray700};

    ${active && LabelModifier.active(theme)};
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    box-sizing: border-box;
    width: 100%;
    min-height: 60px;
    border-radius: 8px;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.Neutral100};
    font-size: ${theme.font.sizes.md};
    padding-left: 24px;
    padding-right: 24px;
    outline-color: ${theme.colors.gray700};
    margin-bottom: 8px;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  `};

  &:hover {
    border-color: #a8a8b3;
  }
`;
