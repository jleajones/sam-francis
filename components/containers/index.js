import styled from 'styled-components';

function BaseContainer({ className, children }) {
  return <div className={className}>{children}</div>;
}

export const Container = styled(BaseContainer)`
  margin: 0 20px;
  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const SpaceBetweenContainer = styled(FlexContainer)`
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    margin-left: 30px;
    width: calc(33.33% - 20px);

    &:first-child {
      margin: 0;
    }
  }
`;
