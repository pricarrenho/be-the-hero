const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  red900: "#db0d2f",
  red800: "#E02041",
  blue: "#0000ff",
  gray900: "#41414D",
  gray800: "#737380",
  gray700: "#A8A8B3",
  Neutral100: "#DCDCE5",
  Neutral200: "#F0F0F5",
};

const font = {
  family: "Roboto",
  sizes: {
    sm: "1.4rem",
    md: "1.8rem",
    lg: "3.6rem",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.Neutral200,
  },
  font,
};
