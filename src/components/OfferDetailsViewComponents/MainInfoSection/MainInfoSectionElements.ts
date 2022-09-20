import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  border-bottom: 4px solid ${({ theme }) => theme.secondary};
  padding: 10px;
`;

const Photo = styled.div<{ img: string }>`
  flex-basis: 70%;
  height: 400px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`;

const MainInfo = styled.div`
  flex-basis: 30%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header = styled.h3`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Subtitle = styled.p`
  padding: 0 0 20px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Price = styled.p`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.boldFont};
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
