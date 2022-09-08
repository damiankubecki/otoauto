import styled from 'styled-components';
import { Link } from 'react-router-dom';
import userAvatarIMG from 'images/user-avatar.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h4`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Photo = styled.div<{ img: string }>`
  margin: 3px 0 13px;
  height: 100px;
  width: 100px;
  border: 2px solid ${({ theme }) => theme.additional};
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-size: contain;
  background-position: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.fontColorAdditional200};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.boldFont};

  &:hover {
    color: ${({ theme }) => theme.fontColorAdditional100};
  }
`;

export { Wrapper, Header, Photo, StyledLink as Link, userAvatarIMG };
