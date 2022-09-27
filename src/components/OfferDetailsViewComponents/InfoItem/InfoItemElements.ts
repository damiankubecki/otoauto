import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.p`
  margin: 2px 0;
  width: 130px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: right;

  @media (max-width: ${media.tablet_S}) {
    text-align: left;
  }
`;

const Data = styled(Title)`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.s};
  width: auto;
  text-align: right;

  @media (max-width: ${media.tablet_S}) {
    text-align: left;
  }
`;

export { Wrapper, Title, Data };
