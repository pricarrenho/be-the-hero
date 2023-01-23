import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import people from "../../assets/img/people.png";
import * as S from "./styles";

export const Login = () => {
  return (
    <div>
      <Logo />
      <Title>Faça seu Logon</Title>
      <Input type="text" name="login" value="Sua ID" />
      <Button size={"small"} styleType="primary">
        Entrar
      </Button>
      <S.Wrapper src={people} alt="" />
    </div>
  );
};
