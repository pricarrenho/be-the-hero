import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import * as S from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const { currentUser, handleLogout } = useGlobalContext();

  const handleLogoutButton = () => {
    navigate("/");
    handleLogout();
  };

  return (
    <Container>
      <S.Wrapper>
        <S.LeftContent>
          <Logo width="200" />
          <p>Olá, {currentUser?.name}</p>
        </S.LeftContent>
        <S.ButtonsContainer>
          <Button styleType="primary" as={Link} to="/register-new-case">
            Cadastrar novo caso
          </Button>

          <Button
            styleType="secondary"
            icon="power"
            onClick={handleLogoutButton}
          ></Button>
        </S.ButtonsContainer>
      </S.Wrapper>
    </Container>
  );
};
