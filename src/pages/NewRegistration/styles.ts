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
  box-sizing: border-box;
`;
export const ContentLeft = styled.div`
  display: grid;
  gap: 24px;
`;

export const FormContent = styled.div`
  width: 448px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
