import styled, { css } from "styled-components";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  min-height: 100vh;
  display: grid;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ContentLeft = styled.div`
  display: grid;
  align-content: center;
`;

export const FormContent = styled.div`
  width: 351px;

  @media (max-width: 800px) {
    width: 280px;
  }
`;

export const groupImg = styled.img`
  max-width: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Error = styled.small`
  ${({ theme }) => css`
    color: #0000ff;
    font-weight: bold;
  `}
`;
