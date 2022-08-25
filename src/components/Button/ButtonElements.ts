import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  min-width: 160px;
  padding: 7px 13px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.fontColorAdditional200};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.boldFont};
  text-decoration: none;
  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.fontColorAdditional100};
  }

  &.bigger {
    min-width: 250px;
    padding: 8px 30px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export { Button, NavLink };
