import { useState } from 'react';
import { IMessage } from 'types/types';

const useMessage = () => {
  const [isMessageActive, setMessageActivity] = useState(false);
  const [messageContent, setMessage] = useState<IMessage>({
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

  return { isMessageActive, messageContent, showMessage, hideMessage };
};

export default useMessage;
