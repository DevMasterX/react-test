import { styled } from "styled-components";

const TypographyHeader = styled.h1`
  color: #510d24;
  margin: 0;
  padding: ${({ isOnline }) => (isOnline ? 130 : 12)};
`;

const Header = () => {
  const isOnline = true;
  return (
    <div>
      <TypographyHeader $isOnline={isOnline}>Hello React</TypographyHeader>
    </div>
  );
};

export default Header;
