import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0 12px;
  padding: 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export { Wrapper, Text, Spinner };
