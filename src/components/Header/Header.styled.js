// -------1 option

import { styled } from "styled-components";

// const TypographyHeader = styled.h1`
//   color: #510d24;
//   margin: 0;
//   padding: ${({ isOnline }) => (isOnline ? 130 : 12)};
// `;

// ------2 option

// const color = "#000";
// const TypographyHeader = styled("h1")({
//   color: "aqua",
//   boxShadow: ({ isOnline }) => `0 0 12px 12px ${isOnline ? color : "#00fbff"}}`,
// });

// ------3rd option - the best

export const TypographyHeader = styled("h1")(({ isOnline }) => {
  return {
    color: isOnline ? "black" : "red",
    textAlign: isOnline ? "center" : "right",
  };
});

export const TypographyText = styled("p")(({ isOnline }) => {
  return {
    color: isOnline ? "black" : "red",
    textAlign: isOnline ? "center" : "right",
  };
});
