import { Box } from "../Box";
import * as S from "./styles";

type CardProps = {
  report: string;
  description: string;
  value: number;
};

export const Card = ({ description, report, value }: CardProps) => {
  return (
    <Box>
      <S.Content>
        <h2>CASO:</h2>
        <p>{report}</p>

        <h2>DESCRIÇÃO:</h2>
        <p>{description}</p>

        <h2>VALOR:</h2>
        <p>{value}</p>
      </S.Content>
    </Box>
  );
};
