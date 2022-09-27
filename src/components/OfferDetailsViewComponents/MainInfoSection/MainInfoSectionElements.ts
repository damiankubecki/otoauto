import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from 'theme/media';

const Wrapper = styled.section`
  display: flex;
  border-bottom: 4px solid ${({ theme }) => theme.secondary};
  padding: 0 10px 10px;

  @media (max-width: ${media.tablet_S}) {
    flex-direction: column;
    align-items: center;
    padding: 0 10px 0;
  }
`;

const Photo = styled.div<{ img: string }>`
  position: relative;
  flex-basis: 70%;
  height: 415px;
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.secondary};
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;

  @media (max-width: ${media.tablet_L}) {
    height: 375px;
  }
  @media (max-width: ${media.tablet_S}) {
    width: 100%;
    flex-basis: 220px;
  }
`;

const MainInfo = styled.div`
  flex-basis: 30%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${media.tablet_S}) {
    width: 100%;
    flex-basis: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 0 0;
  }
`;

const Header = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_S}) {
    margin: 2px 15px 3px 0;
    flex-basis: 100%;
  }
`;

const Subtitle = styled.p`
  padding: 0 0 20px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (max-width: ${media.tablet_S}) {
    margin: 0;
    padding: 0;
    flex-basis: 100%;
  }
`;

const Price = styled.p`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_S}) {
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.fontColorAdditional200};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.boldFont};
  transition: 0.1s;

  &:hover {
    color: ${({ theme }) => theme.fontColorAdditional100};
  }
`;

export { Wrapper, Photo, MainInfo, Header, Subtitle, Price, StyledLink as Link };
