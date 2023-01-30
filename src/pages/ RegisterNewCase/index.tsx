import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";
import { incrementLocalStorageItem } from "../../utils/localStorage";

export const RegisterNewCase = () => {
  const navigate = useNavigate();

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const handleCancel = () => {
    navigate("/home");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    incrementLocalStorageItem("Cases", {
      title: titleInput,
      description: descriptionInput,
      value: Number(valueInput),
      id: uuidv4(),
    });
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
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="title"
                placeholder="Título do caso"
                size="large"
                value={titleInput}
                onChange={setTitleInput}
              />
              <Input
                as="textarea"
                name="description"
                placeholder="Descrição"
                rows={8}
                size="large"
                value={descriptionInput}
                onChange={setDescriptionInput}
              />
              <Input
                type="number"
                name="value"
                placeholder="Valor em reais"
                size="large"
                value={valueInput}
                onChange={setValueInput}
              />

              <S.ButtonDiv>
                <Button
                  styleType="secondary"
                  onClick={handleCancel}
                  type="button"
                >
                  Cancelar
                </Button>

                <Button
                  styleType="primary"
                  disabled={!titleInput || !descriptionInput || !valueInput}
                  type="submit"
                >
                  Cadastrar
                </Button>
              </S.ButtonDiv>
            </form>
          </S.FormContent>
        </S.Content>
      </Box>
    </S.Wrapper>
  );
};
