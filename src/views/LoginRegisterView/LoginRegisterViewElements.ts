import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';

const Title = styled.h2`
  margin-top: 10px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 25px auto 0;
  width: 60%;
`;

const Button = styled(NavLink)`
  flex-basis: 50%;
  padding: 10px 0 15px;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.fontColorAdditional200};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  text-align: center;
  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => theme.fontColorAdditional200};
    opacity: 0.7;
  }

  &.active {
    border-bottom: 2px solid;
    font-weight: ${({ theme }) => theme.boldFont};
  }
`;

export { Title, ButtonsContainer, Button, LoginForm, RegisterForm };
