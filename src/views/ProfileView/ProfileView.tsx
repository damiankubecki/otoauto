import React from 'react';
import useProfileView from 'views/ProfileView/useProfileView';
import ViewTemplate from 'templates/ViewTemplate';
import {
  BackButtonContainer,
  Header,
  Subtitle,
  OfferCard,
  BackButton,
} from './ProfileViewElements';

const ProfileView = () => {
  const { isProfileYours, userOffers, username } = useProfileView();

  return (
    <ViewTemplate>
      {isProfileYours ? (
        <>
          <Header>Witaj na swoim profilu {username}!</Header>
          {userOffers?.length ? (
            <>
              <Subtitle>Poniżej znajdują się wystawione przez ciebie oferty</Subtitle>
              <BackButtonContainer>
                <BackButton />
              </BackButtonContainer>
              {[...userOffers].reverse().map(offer => (
                <OfferCard extended key={offer._id} {...offer} />
              ))}
            </>
          ) : (
            <Subtitle>Nie dodałeś jeszcze żadnego ogłoszenia</Subtitle>
          )}
        </>
      ) : (
        <>
          <Header>Profil użytkownika {username}</Header>
          {userOffers?.length ? (
            <>
              <Subtitle>Poniżej znajdują się oferty wystawione przez tego użytkownika </Subtitle>
              <BackButtonContainer>
                <BackButton />
              </BackButtonContainer>
              {[...userOffers].reverse().map(offer => (
                <OfferCard key={offer._id} extended {...offer} />
              ))}
            </>
          ) : (
            <Subtitle>Ten użytkownik nie dodał żadnego ogłoszenia</Subtitle>
          )}
        </>
      )}
    </ViewTemplate>
  );
};

export default ProfileView;
