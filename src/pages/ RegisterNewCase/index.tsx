import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import * as S from "./styles";

export const RegisterNewCase = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <S.Wrapper>
      <Box>
        <S.Content>
          <S.ContentLeft>
            <Logo />

            <div>
              <Title>Cadastrar novo caso</Title>
              <p>
                Descreva o caso detalhadamente para encontrar um herói para
                resolver isso.
              </p>
              <Link to="/home" icon="ArrowLeft">
                Voltar para home
              </Link>
            </div>
          </S.ContentLeft>

          <S.FormContent>
            <Input
              type="text"
              name="title"
              placeholder="Título do caso"
              size="large"
            />
            <Input
              as="textarea"
              name="description"
              placeholder="Descrição"
              rows={8}
              size="large"
            />
            <Input
              type="text"
              name="value"
              placeholder="Valor em reais"
              size="large"
            />

            <S.ButtonDiv>
              <Button styleType="secondary" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button styleType="primary">Cadastrar</Button>
            </S.ButtonDiv>
          </S.FormContent>
        </S.Content>
      </Box>
    </S.Wrapper>
  );
};
