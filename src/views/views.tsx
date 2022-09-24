import React from 'react';
import { routes } from 'router/routes';
import { IView } from 'types/types';
import HomeView from './HomeView/HomeView';
import LoginRegisterView from './LoginRegisterView/LoginRegisterView';
import LogoutView from './LogoutView/LogoutView';
import OffersView from './OffersView/OffersView';
import OfferDetailsView from './OfferDetailsView/OfferDetailsView';
import ProfileView from './ProfileView/ProfileView';
import AddModifyOfferView from './AddModifyOfferView/AddModifyOfferView';

export const views: IView[] = [
  { name: 'home', path: routes.home, element: <HomeView /> },
  { name: 'login', path: routes.login, element: <LoginRegisterView /> },
  { name: 'register', path: routes.register, element: <LoginRegisterView /> },
  { name: 'logout', path: routes.logout, element: <LogoutView /> },
  { name: 'offers', path: routes.offers, element: <OffersView /> },
  { name: 'offerDetails', path: `${routes.offer}/:id`, element: <OfferDetailsView /> },
  { name: 'profile', path: `${routes.profile}/:id`, element: <ProfileView /> },
  { name: 'addOffer', path: routes.addOffer, element: <AddModifyOfferView type="add" /> },
  {
    name: 'modifyOffer',
    path: `${routes.modifyOffer}/:id`,
    element: <AddModifyOfferView type="modify" />,
  },
];
