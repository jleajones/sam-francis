import Card from '../card';
import AccentCard from '../accentCard';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

const StyledFooter = styled.section`
  padding: 120px 0 160px;
  background: linear-gradient(to top, #fff9e7 0, #fff 100%);
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  > div {
    margin-bottom: 30px;
    border: solid 1px #ccc;
    border-radius: 20px;
    padding: 10px 40px 20px;

    > h5 {
      margin-bottom: 10px;
    }

    > p {
      margin-bottom: 2px;
    }

    &:hover {
      background: #fff;
    }
  }
`;

export default function Footer({ size, grow, href, cta, color }) {
  return (
    <StyledFooter>
      <SpaceBetweenContainer>
        <SmallCard>
          <div>
            <h5>Meet the Parents</h5>
            <p>
              Some text about whats on this page or why we should click through!
            </p>
            <p>
              <a href="">Link to read more</a>
            </p>
          </div>
          <div>
            <h5>Meet the Wedding Party</h5>
            <p>
              Some text about whats on this page or why we should click through!
            </p>
            <p>
              <a href="">Link to read more</a>
            </p>
          </div>
          <div>
            <h5>Meet the Wedding Party</h5>
            <p>
              Some text about whats on this page or why we should click through!
            </p>
            <p>
              <a href="">Link to read more</a>
            </p>
          </div>
        </SmallCard>
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
