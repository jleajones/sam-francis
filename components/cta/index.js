import Link from 'next/Link';
import Button from '../button';
import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 40px;
  border-bottom: solid 1px #ccc;
  border-top: solid 1px #fff;
  flex-grow: 1;
  @media (min-width: 1024px) {
    border: none;
    border-right: solid 1px #ccc;
    border-left: solid 1px #fff;
  }

  &:last-of-type {
    border-bottom: none;
    @media (min-width: 1024px) {
      border-right: none;
    }
  }

  &:first-of-type {
    border-top: none;
    @media (min-width: 1024px) {
      border-left: none;
    }
  }
`;

const Text = styled.h5`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const ButtonLink = styled.a`
  color: #fff;
`;

export default function Cta({ text, href, cta }) {
  return (
    <Container>
      <Text>{text}</Text>
      <Button>
        <Link href={href}>
          <ButtonLink>{cta}</ButtonLink>
        </Link>
      </Button>
    </Container>
  );
}
