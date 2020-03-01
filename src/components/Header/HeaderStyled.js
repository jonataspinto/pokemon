import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  /* width: 100vw; */
  height: 80px;
  padding: 10px;
`;
