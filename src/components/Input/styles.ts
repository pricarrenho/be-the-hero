import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    box-sizing: border-box;
    width: 100%;
    min-height: 60px;
    border-radius: 8px;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.Neutral100};
    font-size: ${theme.font.sizes.md};
    padding: 0px 8px;
    outline-color: ${theme.colors.gray700};
    margin-bottom: 8px;
  `};

  &:hover {
    border-color: #a8a8b3;
  }

  &::placeholder {
    color: #a8a8b3;
  }
`;
