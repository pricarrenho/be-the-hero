import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";

export const Registration = () => {
  return (
    <div>
      <Logo />
      <Title>Cadastro</Title>
      <p>
        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
        casos da sua ONG.
      </p>
      <Input type="text" name="login" value="Nome da ONG" />
      <Input type="email" name="email" value="E-mail" />
      <Input type="text" name="whatsApp" value="WhatsApp" />
      <Input type="text" name="cidade" value="Cidade" />
      <Input type="text" name="uf" value="UF" />
      <Button size={"small"} styleType="primary">
        Cadastrar
      </Button>
    </div>
  );
};
