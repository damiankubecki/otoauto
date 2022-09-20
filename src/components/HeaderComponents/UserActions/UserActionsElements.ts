import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};
`;

const IconContainer = styled.div`
  margin: 0 7px;
`;

const Button = styled(Link)`
  padding: 0 5px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.boldFont};
  transition: 0.1s;

  &:hover {
    color: ${({ theme }) => theme.fontColorAdditional200};
  }
`;

const Username = styled.p`
  margin: 0;
  padding: 0 8px 0 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.boldFont};
`;

export { Wrapper, IconContainer, Button, Username };
