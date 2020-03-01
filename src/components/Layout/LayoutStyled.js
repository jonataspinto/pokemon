import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.section`
  min-height: calc(100vh - (80px + 100px));
`;

export { Container, Main };
