import React, { useContext } from 'react';
import { routes } from 'router/routes';
import { UserContext } from 'contexts/contexts';
import { IUserContext } from 'types/types';
import { user_avatar_IMG } from 'images/images';
import { Wrapper, Header, Photo, Link } from './ProfileCardElements';

const ProfileCard = () => {
  const { isLogged, id, username } = useContext(UserContext) as IUserContext;

  return (
    <Wrapper>
      <Header> {username ? `Zalogowano jako ${username}` : 'Przeglądasz jako gość'}</Header>
      <Photo img={user_avatar_IMG} />
      {isLogged && <Link to={`${routes.profile}/${id}`}>Przejdź do profilu</Link>}
    </Wrapper>
  );
};

export default ProfileCard;
