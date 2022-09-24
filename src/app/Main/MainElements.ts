import styled from 'styled-components';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

const ElementContainer = styled.div`
  margin-top: 70px;
`;

export { Wrapper, ElementContainer, LoadingSpinner };
