import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrapperDefault = styled.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 270px;
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.secondary};
  overflow: hidden;
`;

const WrapperExtended = styled.div`
  display: flex;
  height: 150px;
  width: 1000px;
  margin: 3px 0;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.secondary};
  overflow: hidden;
`;

const Photo = styled.div<{ img?: string; extended?: boolean }>`
  height: ${({ extended }) => (extended ? 'auto' : '180px')};
  width: ${({ extended }) => (extended ? '250px' : 'auto')};
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`;

const Content = styled.div<{ extended?: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ extended }) => (extended ? 'flex-start' : 'center')};
  align-items: ${({ extended }) => (extended ? 'flex-start' : 'stretch')};
  text-align: center;
  padding: ${({ extended }) => (extended ? '10px 20px' : '0 5px')};
`;

const Title = styled.h5<{ extended?: boolean }>`
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.l : theme.fontSize.m)};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  white-space: nowrap;
`;

const Data = styled.p<{ extended?: boolean }>`
  padding: ${({ extended }) => (extended ? '5px 0px 0' : '0')};
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.s : theme.fontSize.xxs)};
  color: ${({ theme }) => theme.fontColor};
  white-space: nowrap;
`;

const Price = styled.p<{ extended?: boolean }>`
  align-self: flex-start;
  margin: 10px 0 0 20px;
  padding: ${({ extended }) => (extended ? '0px 20px' : '0')};
  font-size: ${({ theme, extended }) => (extended ? theme.fontSize.xl : theme.fontSize.l)};
  color: ${({ theme }) => theme.red};
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { WrapperDefault, WrapperExtended, Photo, Content, StyledLink as Link, Title, Data, Price };
