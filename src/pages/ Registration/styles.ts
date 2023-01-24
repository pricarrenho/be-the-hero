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
  align-content: center;
`;

export const Form = styled.div`
  padding: 24px;
  width: 351px;
`;
