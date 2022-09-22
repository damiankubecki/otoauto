import React from 'react';
import { IMessage } from 'types/types';
import { Wrapper, Text, Button } from './MessageElements';

const Message = ({ textContent, buttonContent, buttonFn }: IMessage) => {
  return (
    <Wrapper>
      <Text>{textContent}</Text>
      <Button onClick={buttonFn}>{buttonContent}</Button>
    </Wrapper>
  );
};

export default Message;
