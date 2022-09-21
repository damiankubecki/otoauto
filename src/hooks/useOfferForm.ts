/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect, useContext } from 'react';
import useCarFormSelects from 'hooks/useCarFormSelects';
import { IHandleInputChange, IUserContext, OfferFormType } from 'types/types';
import { IHandleSelectChange } from 'components/Select/Select';
import { IFormValues } from 'components/Forms/OfferForm/OfferForm';
import { useAppDispatch } from 'hooks/useRedux';
import { addNewOfferAsync, updateOfferAsync } from 'store/slices/offersSlice';
import { UserContext } from 'contexts/contexts';
import useMessage from './useMessage';
import { useNavigate, useParams } from 'react-router';
import { routes } from 'router/routes';
import useAPI from './useApi';

interface Props {
  initialFormValues: IFormValues;
  type: OfferFormType;
}

const useOfferForm = ({ initialFormValues, type }: Props) => {
  const user = useContext(UserContext) as IUserContext;
  const dispatch = useAppDispatch();
  const modelSelectRef: any = useRef();
  const navigate = useNavigate();
  const location = useParams();
  const { getOfferById } = useAPI();
  const { MessageContainer, MessageElement, isMessageActive, showMessage, hideMessage } =
    useMessage();
  const [isLoading, setLoading] = useState(false);
  const [isModelsSelectDisabled, setModelsSelectActivity] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>(initialFormValues);
  const { selectsOptions } = useCarFormSelects(formValues?.make || null);

  const handleSelectChange: IHandleSelectChange = (selectName, value) => {
    setFormValues(prevState => ({ ...prevState, [selectName]: value }));
  };

  const handleMakeSelectChange: IHandleSelectChange = (selectName, value) => {
    setFormValues(prevState => ({ ...prevState, [selectName]: value }));
    modelSelectRef?.current.clearValue();
  };

  const handleInputChange: IHandleInputChange = e => {
    setFormValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleFileInputChange: IHandleInputChange = e => {
    const target = e.target as HTMLInputElement;

    if (target.files && target?.files[0].size > 180000) {
      alert('Zbyt duża rozdzielczość obrazu');
      target.value = '';
    }

    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: target.files ? target.files[0] : null,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isFormValid = Object.values(formValues).every(value => value !== null);

    if (isFormValid) {
      setLoading(true);

      if (type === 'add') {
        dispatch(addNewOfferAsync({ userID: user.id, username: user.username, ...formValues }))
          .then(res => {
            showMessage({
              textContent: res.message,
              buttonContent: 'Podgląd',
              buttonFn: () => navigate(`${routes.offer}/${res.data._id}`),
            });
          })
          .catch(err => {
            showMessage({
              textContent: err,
              buttonContent: 'Sporóbuj ponownie',
              buttonFn: hideMessage,
            });
          })
          .finally(() => setLoading(false));
      } else {
        dispatch(
          updateOfferAsync(location.id || '', {
            userID: user.id,
            username: user.username,
            ...formValues,
          })
        )
          .then(res => {
            showMessage({
              textContent: res.message,
              buttonContent: 'Podgląd',
              buttonFn: () => navigate(`${routes.offer}/${res.data._id}`),
            });
          })
          .catch(err => {
            showMessage({
              textContent: err,
              buttonContent: 'Sporóbuj ponownie',
              buttonFn: hideMessage,
            });
          })
          .finally(() => setLoading(false));
      }
    } else alert('Wypełnij formularz');
  };

  useEffect(() => {
    setModelsSelectActivity(!formValues.make);
  }, [formValues.make]);

  useEffect(() => {
    if (type === 'modify') {
      getOfferById(location.id || '').then(res => setFormValues(res));
    }
  }, []);

  return {
    selectsOptions,
    modelSelectRef,
    isModelsSelectDisabled,
    formValues,
    message: {
      container: MessageContainer,
      element: MessageElement,
      isActive: isMessageActive,
    },
    isLoading,
    handleMakeSelectChange,
    handleSelectChange,
    handleInputChange,
    handleFileInputChange,
    handleSubmit,
  };
};

export default useOfferForm;
