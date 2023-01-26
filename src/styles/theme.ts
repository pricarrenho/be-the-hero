const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  red900: "#db0d2f",
  red800: "#E02041",
  gray900: "#41414D",
  gray800: "#737380",
  gray700: "#A8A8B3",
  Neutral100: "#DCDCE5",
  Neutral200: "#F0F0F5",
};

const font = {
  family: "Roboto",
  sizes: {
    sm: "14px",
    md: "18px",
    lg: "36px",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.Neutral200,
  },
  font,
};
