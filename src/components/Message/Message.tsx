import React from 'react';
import { IMessage } from 'types/types';
import { MessageContainer, Wrapper, Text, Button } from './MessageElements';

const Message = ({ textContent, buttonContent, buttonFn }: IMessage) => {
  return (
    <Wrapper>
      <Text>{textContent}</Text>
      <Button onClick={buttonFn}>{buttonContent}</Button>
    </Wrapper>
  );
};

export { MessageContainer };
export default Message;
