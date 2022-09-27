import React, { useContext, useEffect } from 'react';
import { MessageContext } from 'contexts/contexts';
import { IMessageContext } from 'types/types';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import ViewTemplate from 'templates/ViewTemplate';

const NotFoundView = () => {
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const navigate = useNavigate();

  useEffect(() => {
    showMessage({
      textContent: 'Błąd 404. Nie znaleziono strony',
      buttonContent: 'Powrót do strony głownej',
      buttonFn: () => navigate(`${routes.home}`),
    });
  }, []);

  return (
    <ViewTemplate>
      <></>
    </ViewTemplate>
  );
};

export default NotFoundView;
