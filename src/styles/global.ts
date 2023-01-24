import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.background};
      font-family: ${theme.font.family};
    }

    p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};
      color: ${theme.colors.gray800};
      line-height: 24px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.gray900};
    }
  `}
`;
