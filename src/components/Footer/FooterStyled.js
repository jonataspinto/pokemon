import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  /* width: 100vw; */
  height: 100px;
  padding: 10px;
`;

export { FooterWrapper };
