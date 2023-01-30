import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { CasesData } from "../../context/types";
import { convertToCurrency } from "../../utils/convertCurrency";
import { getLocalStorageItem } from "../../utils/localStorage";

import * as S from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />

      <S.Content>
        <Title>Casos Cadastrados</Title>

        <S.CardContainer>
          {getLocalStorageItem("Cases")?.map((item: CasesData) => {
            return (
              <Card
                key={item.id}
                description={item.description}
                report={item.title}
                value={convertToCurrency(item.value)}
              />
            );
          })}
        </S.CardContainer>
      </S.Content>
    </Container>
  );
};
