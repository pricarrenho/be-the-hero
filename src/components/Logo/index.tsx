import heroImg from "../../assets/img/logo.png";
import { LogoProps } from "./types";

export const Logo = ({ width }: LogoProps) => {
  return (
    <img
      src={heroImg}
      alt="Logo do site onde está escrito Be The Hero"
      width={width}
    />
  );
};
