import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { mockJson } from "./mockJson";
import * as S from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Title>Casos Cadastrados</Title>
      <S.CardContainer>
        {mockJson.map((item) => {
          return (
            <Card
              key={item.id}
              description={item.description}
              report={item.report}
              value={item.value}
            />
          );
        })}
      </S.CardContainer>
    </Container>
  );
};
