import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Head } from "../../components/Head";
import { Title } from "../../components/Title";
import { mockJson } from "./mockJson";
import * as S from "./styles";

export const Home = () => {
  return (
    <Container>
      <Head />
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
