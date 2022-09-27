import styled from 'styled-components';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { media } from 'theme/media';

const Wrapper = styled.div`
  margin: 15px auto;
  width: 700px;
  z-index: 1;

  @media (max-width: ${media.tablet_S}) {
    width: 85%;
  }
`;

const SectionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${media.tablet_S}) {
    margin: 0;
  }
`;

const Section = styled.section<{ size: 'normal' | 'wide' }>`
  flex-basis: ${({ size }) => (size === 'normal' ? '33.333%' : '50%')};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${media.tablet_S}) {
    flex-basis: 100%;
  }
`;

const ButtonContainer = styled.div`
  width: 335px;
  margin: 30px 0 0;
  display: flex;
  justify-content: center;
`;

const ProfileCardContainer = styled.div`
  margin: 0 auto;
`;

const DoubleSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${media.tablet_S}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;

const ButtonExpand = styled.button`
  margin: 25px auto 0;
  border: none;
  color: ${({ theme }) => theme.fontColorAdditional200};
  font-weight: ${({ theme }) => theme.boldFont};
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: transparent;
`;

export {
  Wrapper,
  SectionsContainer,
  ButtonContainer,
  DoubleSelectContainer,
  Section,
  ProfileCardContainer,
  ProfileCard,
  ButtonExpand,
};
