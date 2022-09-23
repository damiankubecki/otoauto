import React from 'react';
import { StyledBackButton as Button } from './ButtonElements';

const BackButton = () => {
  const handleClick = () => history.back();

  return <Button onClick={handleClick}>Wróć</Button>;
};

export default BackButton;
