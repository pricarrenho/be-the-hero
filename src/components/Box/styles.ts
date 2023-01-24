import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  `}
`;
