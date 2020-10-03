import Card from '../card';
import AccentCard from '../accentCard';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

const StyledFooter = styled.section`
  padding: 120px 0 160px;
  background: linear-gradient(to top, #fff9e7 0, #fff 100%);
`;

export default function Footer({ size, grow, href, cta, color }) {
  return (
    <StyledFooter>
      <SpaceBetweenContainer>
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/our-story"
          cta="Read more"
        />
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/our-story"
          cta="Read more"
        />
        <AccentCard
          accent
          title="Our Story"
          heading="Get to know Sam and Fran!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/our-story"
          cta="Read more"
          imgUrl="our_story"
        />
      </SpaceBetweenContainer>
    </StyledFooter>
  );
}
