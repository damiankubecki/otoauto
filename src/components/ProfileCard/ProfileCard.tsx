import React, { useContext } from 'react';
import { routes } from 'router/routes';
import { UserContext } from 'contexts/contexts';
import { IUserContext } from 'types/types';
import { Wrapper, Header, Photo, Link, userAvatarIMG } from './ProfileCardElements';

const ProfileCard = () => {
  const { isLogged, id, username } = useContext(UserContext) as IUserContext;

  return (
    <Wrapper>
      <Header> {username ? `Zalogowano jako ${username}` : 'Przeglądasz jako gość'}</Header>
      <Photo img={userAvatarIMG} />
      {isLogged && <Link to={`${routes.profile}/${id}`}>Przejdź do profilu</Link>}
    </Wrapper>
  );
};

export default ProfileCard;
