import styled from 'styled-components';
import ProfileCard from 'components/ProfileCard/ProfileCard';

const Wrapper = styled.div`
  margin: 15px auto;
  width: 700px;
  z-index: 1;
`;

const SectionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Section = styled.section<{ size: 'normal' | 'wide' }>`
  flex-basis: ${({ size }) => (size === 'normal' ? '33.333%' : '50%')};
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export { Wrapper, SectionsContainer, ButtonContainer, Section, ProfileCardContainer, ProfileCard };
