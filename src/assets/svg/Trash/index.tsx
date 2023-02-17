import { SvgProps } from "../types";

export const Trash = ({ size = 16, color = "currentColor" }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.1911H5H21"
        stroke="#A8A8B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.1911V4.1911C8 3.66067 8.21071 3.15196 8.58579 2.77689C8.96086 2.40181 9.46957 2.1911 10 2.1911H14C14.5304 2.1911 15.0391 2.40181 15.4142 2.77689C15.7893 3.15196 16 3.66067 16 4.1911V6.1911M19 6.1911V20.1911C19 20.7215 18.7893 21.2302 18.4142 21.6053C18.0391 21.9804 17.5304 22.1911 17 22.1911H7C6.46957 22.1911 5.96086 21.9804 5.58579 21.6053C5.21071 21.2302 5 20.7215 5 20.1911V6.1911H19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.1911V17.1911"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11.1911V17.1911"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
