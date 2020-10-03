import { useEffect, useState } from 'react';
import Box from '../box';
import styled from 'styled-components';

const BoxContainer = styled.div`
  display: flex;
`;

export default function Collage() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(window.innerWidth / 8);

    window.addEventListener('resize', () => {
      setSize(window.innerWidth / 8);
    });
  }, []);
  return (
    <>
      <BoxContainer>
        {[
          {
            color: 'red',
            size
          },
          {
            color: 'orange',
            size
          },
          {
            color: 'black',
            size,
            grow: 2,
            href: 'https://www.instagram.com',
            cta: '#somehashtag'
          },
          {
            color: 'yellow',
            size
          },
          {
            color: 'green',
            size
          },
          {
            color: 'blue',
            size
          },
          {
            color: 'indigo',
            size
          }
        ].map((box) => (
          <Box
            key={box}
            color={box.color}
            size={box.size}
            grow={box.grow}
            href={box.href}
            cta={box.cta}
          />
        ))}
      </BoxContainer>
      <BoxContainer>
        {[
          {
            color: 'indigo',
            size
          },
          {
            color: 'blue',
            size
          },
          {
            color: 'green',
            size
          },
          {
            color: 'yellow',
            size
          },
          {
            color: 'orange',
            size
          },
          {
            color: 'black',
            size,
            grow: 2,
            href: 'https://www.instagram.com',
            cta: 'sam+fran'
          },
          {
            color: 'red',
            size
          }
        ].map((box) => (
          <Box
            key={box}
            color={box.color}
            size={box.size}
            grow={box.grow}
            href={box.href}
            cta={box.cta}
          />
        ))}
      </BoxContainer>
    </>
  );
}
