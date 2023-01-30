import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import { incrementLocalStorageItem } from "../../utils/localStorage";
import * as S from "./styles";

export const Registration = () => {
  const navigate = useNavigate();
  const { handleLogin } = useGlobalContext();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [whatsAppInput, setWhatsAppInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [ufInput, setUfInput] = useState("");

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    incrementLocalStorageItem("Users", {
      name: nameInput,
      email: emailInput,
      phone: whatsAppInput,
      city: cityInput,
      uf: ufInput,
    });

    handleLogin(emailInput);
    navigate("/home");
  };

  return (
    <S.Wrapper>
      <Box>
        <S.Content>
          <S.ContentLeft>
            <div>
              <Logo />
            </div>

            <div>
              <Title>Cadastro</Title>
              <p>
                Faça seu cadastro, entre na plataforma e ajude pessoas a
                encontrarem os casos da sua ONG.
              </p>
              <Link to="/" icon="ArrowLeft">
                Voltar para o logon
              </Link>
            </div>
          </S.ContentLeft>
          <div>
            <S.Form>
              <form onSubmit={handleFormSubmit}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome da ONG"
                  value={nameInput}
                  onChange={setNameInput}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={emailInput}
                  onChange={setEmailInput}
                />
                <Input
                  type="number"
                  name="whatsApp"
                  placeholder="WhatsApp"
                  value={whatsAppInput}
                  onChange={setWhatsAppInput}
                />
                <S.LastForm>
                  <Input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={cityInput}
                    onChange={setCityInput}
                  />
                  <Input
                    type="text"
                    name="uf"
                    placeholder="UF"
                    value={ufInput}
                    onChange={setUfInput}
                    maxLength="2"
                  />
                </S.LastForm>
                <Button
                  fullWidth
                  styleType="primary"
                  type="submit"
                  disabled={
                    !nameInput ||
                    !emailInput ||
                    !whatsAppInput ||
                    !cityInput ||
                    !ufInput
                  }
                >
                  Cadastrar
                </Button>
              </form>
            </S.Form>
          </div>
        </S.Content>
      </Box>
    </S.Wrapper>
  );
};
