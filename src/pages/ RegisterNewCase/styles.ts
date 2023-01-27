import styled from "styled-components";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  min-height: 100vh;
  display: grid;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 64px 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 351px;
  padding: 16px;

  @media (max-width: 800px) {
    width: 280px;
  }

  @media (max-width: 800px) {
    a {
      display: none;
    }
  }
`;

export const FormContent = styled.div`
  width: 448px;
  margin-right: 16px;

  textarea {
    resize: none;
  }

  @media (max-width: 800px) {
    width: 280px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  button {
    width: 66%;

    &:first-of-type {
      width: 33%;
    }
  }
`;
