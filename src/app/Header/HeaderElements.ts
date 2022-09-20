import styled from 'styled-components';
import Title from 'components/HeaderComponents/Title/Title';
import UserActions from 'components/HeaderComponents/UserActions/UserActions';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import Button from 'components/Button/Button';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 35px;
  background-color: ${({ theme }) => theme.primary};
  z-index: 1;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const ItemContainer = styled.div`
  margin-left: 15px;
`;

export { Wrapper, Section, Title, UserActions, ItemContainer, ThemeSwitch, Button };
