import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;

  @media (max-width: 800px) {
    justify-content: center;
    margin-bottom: 0px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 800px) {
    width: 226px;
    text-align: center;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
