import styled from "styled-components";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  box-sizing: border-box;
  padding: 64px 24px;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-left: 48px;
  padding: 16px;
`;

export const FormContent = styled.div`
  width: 448px;
  margin-right: 16px;

  textarea {
    resize: none;
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
