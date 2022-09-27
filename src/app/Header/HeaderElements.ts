import styled from 'styled-components';
import Title from 'components/HeaderComponents/Title/Title';
import UserActions from 'components/HeaderComponents/UserActions/UserActions';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import Button from 'components/Button/Button';
import { media } from 'theme/media';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 35px;
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
  z-index: 1;

  @media (max-width: ${media.tablet_M}) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: ${media.tablet_S}) {
    padding: 2px 5px 0;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${media.tablet_M}) {
    margin: 0 0 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ItemContainer = styled.div`
  margin-left: 15px;

  @media (max-width: ${media.tablet_S}) {
    margin-left: 0px;
  }
`;

export { Wrapper, Section, Title, UserActions, ItemContainer, ThemeSwitch, Button };
