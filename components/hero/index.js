import styled from 'styled-components';
import Button from '../button';
import Link from 'next/Link';

const BackgroundImage = styled.div`
  height: 720px;
  background: url('/Artboard 2.png') no-repeat;
  background-size: cover;
  border-bottom: solid 8px ${({ theme }) => theme.colors.accent};
  background-position: 23% 0;
  @media (min-width: 1024px) {
    // background-position: 0 0;
  }
`;

const Text = styled.div`
  text-align: center;
  padding-top: 300px;
`;

const Color = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 40px 0;
`;

const Message = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;

  > span {
    font-family: futura-pt-bold;
    font-size: 28px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: 42px;
  line-height: 40px;
  margin-bottom: 50px;
  position: relative;
  top: 10px;

  > span {
    font-size: 90px;
  }
`;

export function Hero() {
  return <BackgroundImage />;
}

export function HeroWithText({ title, href, cta, onClick, message }) {
  return (
    <BackgroundImage>
      <Text>
        <Color>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          {message && <Message dangerouslySetInnerHTML={{ __html: message }} />}
          {onClick && <Button onClick={onClick}>{cta}</Button>}
          {href && (
            <Button>
              <Link href={href}>{cta}</Link>
            </Button>
          )}
        </Color>
      </Text>
    </BackgroundImage>
  );
}
