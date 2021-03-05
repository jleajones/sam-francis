import styled from 'styled-components';
import { useState } from 'react';
import { FlexContainer, SpaceAroundContainer } from '../containers';
import PropTypes from 'prop-types';

const PeopleContainer = styled(SpaceAroundContainer)`
  flex-wrap: wrap;
`;

const Person = styled.div`
  margin-right: 30px;
  margin-bottom: 60px;
  position: relative;
  cursor: pointer;
`;

const PersonImage = styled.div`
  margin: 0 auto;
  background: #ccc;
  background-image: ${({ img }) => `url('/cypher/${img}.png')`};
  background-position: center;
  border-radius: 50%;
  height: 320px;
  width: 320px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const Name = styled.p`
  text-align: center;
  > span {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

const Title = styled.p`
  text-align: center;
  font-style: italic;
  color: #ccc;
`;

const Question = styled.p`
  text-align: center;
  flex-wrap: wrap;
  width: 320px;
  font-weight: 100;
`;
const Answer = styled.p`
  text-align: center;
  width: 320px;
  font-weight: 700;
  padding: 0 45px;
`;

const Overlay = styled.div`
  position: relative;
  top: 60%;
  background: rgba(255, 255, 255, 0.6);
  height: 100%;
  padding: 20px 0 0 0;
  display: ${({ show }) => (show ? `block` : `none`)};
`;

export default function People({ people, question }) {
  return (
    <PeopleContainer>
      {people.map((person) => {
        const [show, setShow] = useState(false);
        const handleHover = () => {
          setShow(!show);
        };
        return (
          <Person
            key={person.name}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <PersonImage img={person.img}>
              {question && (
                <Overlay show={show}>
                  <Question>{question}</Question>
                  <Answer>{person.answer}</Answer>
                </Overlay>
              )}
            </PersonImage>
            <Name>
              <span>{person.desc}</span> {person.name}
            </Name>
            <Title>{person.title}</Title>
          </Person>
        );
      })}
    </PeopleContainer>
  );
}

People.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
