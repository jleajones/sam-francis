import styled from 'styled-components';

const StyledBox = styled.div`
  width: ${({ size, grow = 1 }) => grow * size}px;
  height: ${({ size }) => size}px;

  background: ${({ color }) => color} ${({ url }) => url ? `url(${url}.jpg)` : ''} no-repeat
    center;
  background-size: ${({ size }) => size}px auto;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
`;

export default function Box({ size, grow, href, cta, color, url }) {
  return (
    <StyledBox size={size} grow={grow} color={color} url={url}>
      {href && (
        <StyledLink href={href} target="_blank" rel="noreferrer">
          {cta}
        </StyledLink>
      )}
    </StyledBox>
  );
}
