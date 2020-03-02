import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const currentContainer = {
  home: css`
    ${media.lessThan('small')`
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      padding: 40px;
    `}
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  `,
  pokemon: css`
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  `,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.section`
  flex: 1;
  display: grid;
  ${(props) => currentContainer[props.currentContainer]}
`;

export { Container, Main };
