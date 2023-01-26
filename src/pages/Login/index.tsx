import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import people from "../../assets/img/people.png";
import * as S from "./styles";
import { Link } from "../../components/Link";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const { username, setUsername } = useGlobalContext();

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentLeft>
          <Logo />

          <S.FormContent>
            <Title>Faça seu Logon</Title>
            <Input
              type="text"
              name="login"
              placeholder="Sua ID"
              value={username}
              onChange={setUsername}
            />
            {username ? (
              <Button fullWidth styleType="primary" onClick={handleLogin}>
                Entrar
              </Button>
            ) : (
              <Button
                fullWidth
                styleType="primary"
                onClick={handleLogin}
                disabled
              >
                Entrar
              </Button>
            )}

            <Link to="/registration" icon="ArrowRight">
              Não tenho cadastro
            </Link>
          </S.FormContent>
        </S.ContentLeft>

        <S.groupImg
          src={people}
          alt="Foto de cinco pessoas de costas se abraçando"
        />
      </S.Content>
    </S.Wrapper>
  );
};
