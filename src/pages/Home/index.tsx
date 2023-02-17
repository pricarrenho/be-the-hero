import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import { convertToCurrency } from "../../utils/convertCurrency";
import * as S from "./styles";

export const Home = () => {
  const { cases } = useGlobalContext();

  return (
    <Container>
      <Header />

      <S.Content>
        <Title>Casos Cadastrados</Title>

        <S.CardContainer>
          {cases?.map((value) => {
            return (
              <Card
                key={value.id}
                id={value.id}
                description={value.description}
                report={value.title}
                value={convertToCurrency(value.value)}
              />
            );
          })}
        </S.CardContainer>
      </S.Content>
    </Container>
  );
};
