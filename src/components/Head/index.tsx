import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import * as S from "./styles";

export const Head = () => {
  return (
    <Container>
      <S.Wrapper>
        <div>
          <Logo />
        </div>
        <S.ButtonsContainer>
          <Button styleType={"primary"}>Cadastrar novo caso</Button>
          <Button styleType={"secondary"} icon="Power"></Button>
        </S.ButtonsContainer>
      </S.Wrapper>
    </Container>
  );
};
