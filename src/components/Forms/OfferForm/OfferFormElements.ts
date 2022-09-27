import styled from 'styled-components';
import { media } from 'theme/media';

const SectionsContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${media.tablet_M}) {
    width: 650px;
  }
  @media (max-width: ${media.tablet_S}) {
    width: 98%;
    flex-direction: column;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: ${media.tablet_S}) {
    margin: 0;
  }
`;

export { SectionsContainer, Section };
