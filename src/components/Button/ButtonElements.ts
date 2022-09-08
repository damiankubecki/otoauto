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
  text-align: center;
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

  &.red {
    background-color: ${({ theme }) => theme.red};

    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
`;

export { Button, StyledNavLink as NavLink };
