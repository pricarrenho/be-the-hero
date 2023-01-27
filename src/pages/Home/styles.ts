import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 800px) {
    justify-items: center;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 48px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px;
  }
`;
