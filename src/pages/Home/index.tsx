import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import { convertToCurrency } from "../../utils/convertCurrency";

import * as S from "./styles";

export const Home = () => {
  const { getLocalStorageCases } = useGlobalContext();

  return (
    <Container>
      <Header />

      <S.Content>
        <Title>Casos Cadastrados</Title>

        <S.CardContainer>
          {getLocalStorageCases()?.map((item) => {
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
