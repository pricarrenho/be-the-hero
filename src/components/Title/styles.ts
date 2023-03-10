import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.lg};
    margin-bottom: 16px;
    margin-top: 32px;
  `}
`;
