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
  box-sizing: border-box;
  padding: 64px 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
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
`;

export const Form = styled.div`
  width: 351px;

  @media (max-width: 800px) {
    width: 308px;
  }
`;

export const LastForm = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 8px;
`;
