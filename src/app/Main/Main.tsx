import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useMain from 'hooks/useMain';
import { CarsContext, MessageContext, OffersContext, LoadingContext } from 'contexts/contexts';
import { Wrapper, ElementContainer, LoadingSpinner, Message } from './MainElements';
import { views } from 'views/views';

const Main = () => {
  const { isLoading, setLoading, isMessageActive, messageContent, showMessage, cars, offers } =
    useMain();
  console.log(isMessageActive, messageContent);

  return (
    <Wrapper>
      {isLoading ? (
        <ElementContainer>
          <LoadingSpinner />
        </ElementContainer>
      ) : isMessageActive ? (
        <ElementContainer>
          <Message {...messageContent} />
        </ElementContainer>
      ) : (
        <CarsContext.Provider value={cars}>
          <OffersContext.Provider value={offers}>
            <LoadingContext.Provider value={{ setLoading }}>
              <MessageContext.Provider value={{ showMessage }}>
                <Routes>
                  {views.map(view => (
                    <Route key={view.name} path={view.path} element={view.element} />
                  ))}
                </Routes>
              </MessageContext.Provider>
            </LoadingContext.Provider>
          </OffersContext.Provider>
        </CarsContext.Provider>
      )}
    </Wrapper>
  );
};

export default Main;
