import { Box } from "../Box";
import { Button } from "../Button";
import { CardProps } from "./types";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const Card = ({ description, report, value, id }: CardProps) => {
  const { cases, handleCases } = useGlobalContext();

  const handleClickDelete = () => {
    handleCases(cases.filter((value) => value.id !== id));
  };

  return (
    <Box>
      <S.Content>
        <div>
          <h2>CASO:</h2>
          <p>{report}</p>

          <h2>DESCRIÇÃO:</h2>
          <p>{description}</p>

          <h2>VALOR:</h2>
          <p>{value}</p>
        </div>

        <Button styleType="tertiary" icon="trash" onClick={handleClickDelete} />
      </S.Content>
    </Box>
  );
};
