import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import * as S from "./styles";

export const Head = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Container>
      <S.Wrapper>
        <div>
          <Logo />
        </div>
        <S.ButtonsContainer>
          <Button styleType={"primary"} as={Link} to="/new-registration">
            Cadastrar novo caso
          </Button>

          <Button
            styleType={"secondary"}
            icon="Power"
            onClick={handleLogout}
          ></Button>
        </S.ButtonsContainer>
      </S.Wrapper>
    </Container>
  );
};
