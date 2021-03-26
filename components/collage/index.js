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
            url: 'img_1',
            size
          },
          {
            url: 'img_2',
            size
          },
          {
            color: 'black',
            size,
            grow: 2,
            href: 'https://www.instagram.com/explore/tags/wegotthegreenlight/',
            cta: '#WeGotTheGreenLight'
          },
          {
            url: 'img_3',
            size
          },
          {
            url: 'img_4',
            size
          },
          {
            url: 'img_5',
            size
          },
          {
            url: 'img_6',
            size
          }
        ].map((box) => (
          <Box
            key={box.url || box.color}
            color={box.color}
            url={box.url}
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
            url: 'img_7',
            size
          },
          {
            url: 'img_8',
            size
          },
          {
            url: 'img_9',
            size
          },
          {
            url: 'img_10',
            size
          },
          {
            url: 'img_11',
            size
          },
          {
            color: 'black',
            size,
            grow: 2,
            href: 'https://www.instagram.com/explore/tags/wegotthegreenlight/',
            cta: 'sam+fran'
          },
          {
            url: 'img_12',
            size
          }
        ].map((box) => (
          <Box
            key={box.url || box.color}
            color={box.color}
            url={box.url}
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
