// import { styled } from "styled-components";
import { TypographyHeader, TypographyText } from "./Header.styled";

const Header = () => {
  const isOnline = true;
  return (
    <div>
      <TypographyHeader $isOnline={isOnline}>Hello React</TypographyHeader>
      <TypographyText>qwerty</TypographyText>
    </div>
  );
};

export default Header;
