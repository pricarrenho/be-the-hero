import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";

export const NewRegistration = () => {
  return (
    <div>
      <Logo />
      <Title>Cadastrar novo caso</Title>
      <p>
        Descreva o caso detalhadamente para encontrar um herói para resolver
        isso.
      </p>
      <Input type="text" name="title" value="Título do caso" />
      <Input type="text" name="value" value="Valor em reais" />
      <Button size="small" styleType="secondary">
        Cancelar
      </Button>
      <Button size="medium" styleType="primary">
        Cadastrar
      </Button>
    </div>
  );
};
