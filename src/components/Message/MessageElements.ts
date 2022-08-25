import styled from 'styled-components';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  margin: 0 0 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.fontColor};
  font-weight: ${({ theme }) => theme.boldFont};
`;

export { Wrapper, Text, Button };
