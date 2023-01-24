import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import * as S from "./styles";

export const Registration = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentLeft>
          <Logo />

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
        <S.Form>
          <Input type="text" name="login" placeholder="Nome da ONG" />
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="text" name="whatsApp" placeholder="WhatsApp" />
          <Input type="text" name="cidade" placeholder="Cidade" />
          <Input type="text" name="uf" placeholder="UF" />
          <Button size={"large"} styleType="primary">
            Cadastrar
          </Button>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
};
