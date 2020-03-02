import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 8px;
  min-height: 100px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export { CardWrapper };
