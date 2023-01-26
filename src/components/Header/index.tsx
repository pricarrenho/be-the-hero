import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import * as S from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    handleChange();
  };

  const { username, setUsername } = useGlobalContext();

  const handleChange = () => {
    setUsername("");
  };

  return (
    <Container>
      <S.Wrapper>
        <S.LeftContent>
          <Logo width="200" />
          <p>Olá, {username}</p>
        </S.LeftContent>
        <S.ButtonsContainer>
          <Button styleType={"primary"} as={Link} to="/register-new-case">
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
