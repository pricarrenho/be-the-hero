import { useRef, useState } from "react";
import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [labelActive, setLabelActive] = useState(false);

  const handleFocus = () => {
    setLabelActive(true);
  };

  const handleBlur = () => {
    setLabelActive(false);
  };

  return (
    <S.Wrapper>
      <S.Label
        htmlFor={name}
        active={labelActive || !!ref.current?.value || !!value}
      >
        {placeholder}
      </S.Label>
      <S.Input
        name={name}
        type={type}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(event: any) => onChange(event.target.value)}
        value={value}
        {...props}
      />
    </S.Wrapper>
  );
};
