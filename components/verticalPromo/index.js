import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation';

// import Venue from '/venue.svg';

const Promo = styled.section`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 80px;

  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 30px;
  letter-spacing: 8px;
  color: ${({ theme }) => theme.colors.accent};
`;

const Heading = styled.h3`
  font-size: 16px;
  // color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
  letter-spacing: 3px;
  text-transform: initial;
`;

const Description = styled.h2`
  font-size: 12px;
  font-weight: normal;
  // color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 3px;
  // font-weight: 300;
  line-height: 18px;
`;

export default function VerticalPromo({ slug, title, heading, description }) {
  const { t } = useTranslation();
  return (
    <Promo>
      <Image src={`/${slug.toLowerCase()}.svg`} />
      <Title>{t(title)}</Title>
      <Heading>{t(heading)}</Heading>
      <Description dangerouslySetInnerHTML={{ __html: t(description) }} />
    </Promo>
  );
}

VerticalPromo.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
