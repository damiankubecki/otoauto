import { useState, FormEvent, ChangeEventHandler, useContext } from 'react';
import { registerUserAsync } from 'store/slices/userSlice';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { LoadingContext, MessageContext } from 'contexts/contexts';
import { ILoadingContext, IMessageContext } from 'types/types';

interface IFormValues {
  username: string;
  password: string;
  password_repeat: string;
}

const useRegisterForm = () => {
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<IFormValues>({
    username: '',
    password: '',
    password_repeat: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFormValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const clearForm = () => setFormValues({ username: '', password: '', password_repeat: '' });

  const validateForm = ({ username, password, password_repeat }: IFormValues): boolean => {
    let messageTextContent = '';

    if (password.length < 6) messageTextContent = 'Hasło jest zbyt krótkie';
    if (!username && !password) messageTextContent = 'Nie uzupełniono formularza';
    if (password !== password_repeat) messageTextContent = 'Hasła nie są do siebie podobne';

    if (messageTextContent) {
      clearForm();
      showMessage({
        textContent: messageTextContent,
        buttonContent: 'Spróbuj ponownie',
        buttonFn: () => navigate(`${routes.register}`),
      });
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { username, password } = formValues;
      const isFormValid = validateForm({ ...formValues });

      if (isFormValid) {
        await registerUserAsync({ username, password });
        showMessage({
          textContent: 'Stworzono użytkownika.',
          buttonContent: 'Zaloguj się',
          buttonFn: () => navigate(`${routes.login}`),
        });
      }
    } catch (err) {
      showMessage({ textContent: `${err}`, buttonContent: 'Spróbuj ponownie' });
    }

    setLoading(false);
    clearForm();
  };

  return { formValues, handleInputChange, handleFormSubmit };
};

export default useRegisterForm;
