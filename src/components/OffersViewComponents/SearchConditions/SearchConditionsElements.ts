import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.tablet_L}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

const Text = styled.p`
  margin: 3px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_L}) {
    min-width: 33.33%;
    margin: 0 0 3px;
    text-align: center;
  }
  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Span = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.lightFont};

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export { Wrapper, Text, Span };
