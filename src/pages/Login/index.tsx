import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import people from "../../assets/img/people.png";
import * as S from "./styles";
import { Link } from "../../components/Link";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { FormEvent, useEffect, useState } from "react";

export const Login = () => {
  const [loginInput, setLoginInput] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const { setUsername, handleLogin } = useGlobalContext();

  useEffect(() => {
    setErrorLogin(false);
  }, [loginInput]);

  const navigate = useNavigate();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (handleLogin(loginInput)) {
      navigate("/home");
      setUsername(loginInput);
    } else {
      setErrorLogin(true);
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentLeft>
          <Logo />

          <S.FormContent>
            <Title>Faça seu Logon</Title>
            <form onSubmit={handleFormSubmit}>
              <Input
                type="text"
                name="login"
                id="login"
                placeholder="Seu e-mail"
                value={loginInput}
                onChange={setLoginInput}
              />

              <Button
                fullWidth
                styleType="primary"
                disabled={!loginInput}
                type="submit"
              >
                Entrar
              </Button>

              {errorLogin && (
                <S.Error>
                  <small>Email inválido.</small>
                </S.Error>
              )}
            </form>

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
