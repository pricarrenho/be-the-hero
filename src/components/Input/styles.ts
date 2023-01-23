import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 351px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 8px;
    background: ${theme.colors.white};
    color: ${theme.colors.gray700};
    border: 2px solid ${theme.colors.Neutral100};
    font-size: ${theme.font.sizes.md};
    padding: 0px 8px;
    outline-color: ${theme.colors.gray700};
    margin: 4px;
  `};
  &:hover {
    border-color: #a8a8b3;
  }
`;
