import React, { useState } from 'react';
import { IMessage } from 'types/types';
import Message from 'components/Message/Message';

const useMessage = () => {
  const [isMessageActive, setMessageActivity] = useState(false);
  const [message, setMessage] = useState<IMessage>({
    textContent: '',
    buttonContent: '',
    buttonFn: () => null,
  });

  const showMessage = ({ textContent, buttonContent, buttonFn }: IMessage) => {
    setMessage({ textContent, buttonContent, buttonFn });
    setMessageActivity(true);
  };

  const hideMessage = () => {
    setMessage({ textContent: '', buttonContent: '', buttonFn: () => null });
    setMessageActivity(false);
  };

  const MessageElement = (): JSX.Element => (
    <Message
      textContent={message.textContent}
      buttonContent={message.buttonContent}
      buttonFn={message.buttonFn}
    />
  );

  return { MessageElement, isMessageActive, showMessage, hideMessage };
};

export default useMessage;
