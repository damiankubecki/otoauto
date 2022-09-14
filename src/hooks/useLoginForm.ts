import { useState, FormEvent, ChangeEventHandler } from 'react';
import { loginUserAsync } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/useRedux';
import useMessage from 'hooks/useMessage';
import useLocalStorage from 'hooks/useLocalStorage';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { USER_LOCALSTORAGE } from 'config';

interface IFormValues {
  username: string;
  password: string;
}

const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { saveToLocalStorage } = useLocalStorage();
  const { MessageElement, isMessageActive, showMessage, hideMessage } = useMessage();
  const [isLoading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>({ username: '', password: '' });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFormValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const clearForm = () => setFormValues({ username: '', password: '' });

  const submitFn = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { username, password } = formValues;
      const response = await dispatch(loginUserAsync({ username, password }));

      saveToLocalStorage(USER_LOCALSTORAGE, {
        id: response.data._id,
        username: response.data.username,
      });

      showMessage({
        textContent: `${response.message}`,
        buttonContent: 'Przejdź do strony głównej',
        buttonFn: () => navigate(`${routes.home}`),
      });
    } catch (err) {
      showMessage({
        textContent: `${err}`,
        buttonContent: 'Spróbuj ponownie',
        buttonFn: hideMessage,
      });
    }
    setLoading(false);
    clearForm();
  };

  const message = {
    isActive: isMessageActive,
    element: MessageElement,
  };

  const form = {
    values: { ...formValues },
    handleInputChange,
  };

  return { isLoading, message, form, submitFn };
};

export default useLoginForm;
