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
  gap: 16px;
  align-content: center;
`;

export const FormContent = styled.div`
  width: 351px;
`;

export const groupImg = styled.img`
  max-width: 100%;
`;
