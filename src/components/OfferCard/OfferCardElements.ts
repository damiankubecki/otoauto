import styled, { css } from 'styled-components';
import IconButton from 'components/Button/IconButton';
import { media } from 'theme/media';

const WrapperDefault = styled.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 270px;
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.secondary};
  overflow: hidden;

  @media (max-width: ${media.tablet_S}) {
    height: auto;
    width: 195px;
    border-width: 2px;
  }
`;

const WrapperExtended = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  width: 900px;
  margin: 3px 0;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.secondary};
  overflow: hidden;

  @media (max-width: ${media.tablet_L}) {
    width: 800px;
  }
  @media (max-width: ${media.tablet_M}) {
    height: 135px;
    width: 700px;
  }
  @media (max-width: ${media.tablet_S}) {
    height: 100px;
    width: 98%;
  }
  @media (max-width: ${media.phone_M}) {
    height: 85px;
    width: 95%;
  }
`;

const Photo = styled.div<{ img?: string; extended?: boolean }>`
  height: ${({ extended }) => (extended ? 'auto' : '180px')};
  width: ${({ extended }) => (extended ? '250px' : 'auto')};
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;

  @media (max-width: ${media.tablet_M}) {
    width: ${({ extended }) => (extended ? '190px' : 'auto')};
  }
  @media (max-width: ${media.tablet_S}) {
    height: ${({ extended }) => (extended ? 'auto' : '120px')};
    width: ${({ extended }) => (extended ? '140px' : 'auto')};
  }
  @media (max-width: ${media.phone_M}) {
    width: ${({ extended }) => (extended ? '100px' : 'auto')};
  }
`;

const Content = styled.div<{ extended?: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ extended }) => (extended ? 'flex-start' : 'center')};
  align-items: ${({ extended }) => (extended ? 'flex-start' : 'stretch')};
  text-align: center;
  padding: ${({ extended }) => (extended ? '10px 20px' : '0 5px')};

  @media (max-width: ${media.tablet_S}) {
    justify-content: flex-start;
    padding: ${({ extended }) => (extended ? '5px 8px' : '0 5px')};
  }
`;

const Title = styled.h5<{ extended?: boolean }>`
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.l : theme.fontSize.m)};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: ${media.tablet_S}) {
    margin: 0;
    padding: ${({ extended }) => (extended ? '0' : '8px 0 6px')};
    font-size: ${({ theme, extended }) => (extended ? theme.fontSize.m : theme.fontSize.m)};
  }
`;

const Data = styled.p<{ extended?: boolean }>`
  padding: ${({ extended }) => (extended ? '5px 0px 0' : '0')};
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.s : theme.fontSize.xxs)};
  color: ${({ theme }) => theme.fontColor};
  white-space: nowrap;

  @media (max-width: ${media.tablet_M}) {
    margin: ${({ extended }) => (extended ? '0 0 0px' : '0')};
  }

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme, extended }) => (extended ? theme.fontSize.xxs : theme.fontSize.xxs)};
  }
`;

const Price = styled.p<{ extended?: boolean }>`
  align-self: flex-start;
  margin: 10px 0 0 20px;
  padding: ${({ extended }) => (extended ? '0px 20px' : '0')};
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.xl : theme.fontSize.l)};
  color: ${({ theme }) => theme.red};
  font-weight: bold;

  @media (max-width: ${media.tablet_M}) {
    flex-grow: 1;
    width: 100%;
    display: ${({ extended }) => (extended ? 'flex' : 'block')};
    justify-content: flex-end;
    align-items: flex-end;
    margin: ${({ extended }) => (extended ? '0px 0 0' : '10px auto 0')};
    padding: ${({ extended }) => (extended ? '0px 8px' : '0')};
  }
  @media (max-width: ${media.tablet_S}) {
    margin: ${({ extended }) => (extended ? '0' : '10px auto 0')};
    padding: ${({ extended }) => (extended ? '0px 0 0' : '0')};
    font-size: ${({ theme, extended }) => (extended ? theme.fontSize.l : theme.fontSize.l)};
  }
  @media (max-width: ${media.phone_M}) {
    ${({ extended }) =>
      extended &&
      css`
        position: absolute;
        bottom: 0;
        right: 5px;
      `}
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  display: flex;
  width: 100px;
  padding: 0 0 5px;
  justify-content: space-evenly;
  z-index: 99;

  @media (max-width: ${media.tablet_M}) {
    left: 205px;
    right: auto;
    bottom: 7px;
    padding: 0;
    width: 90px;
  }
  @media (max-width: ${media.tablet_S}) {
    left: 144px;
  }
  @media (max-width: ${media.phone_M}) {
    left: 105px;
    bottom: 0;
    width: 80px;
  }
`;

export {
  WrapperDefault,
  WrapperExtended,
  ButtonsContainer,
  IconButton,
  Photo,
  Content,
  Title,
  Data,
  Price,
};
