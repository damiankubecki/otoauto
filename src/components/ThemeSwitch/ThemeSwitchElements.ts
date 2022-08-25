import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  height: 30px;
  width: 45px;
  border-radius: 35px;
  font-size: ${({ theme }) => theme.fontSize.s};

  &:focus {
    box-shadow: none;
  }
`;

export { StyledButton as Button };
