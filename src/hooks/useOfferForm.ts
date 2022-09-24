/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import useCarFormSelects from 'hooks/useCarFormSelects';
import { useAppDispatch } from 'hooks/useRedux';
import useAPI from 'hooks/useApi';
import { LoadingContext, MessageContext, UserContext } from 'contexts/contexts';
import { addNewOfferAsync, updateOfferAsync } from 'store/slices/offersSlice';
import {
  IHandleInputChange,
  ILoadingContext,
  IMessageContext,
  IUserContext,
  OfferFormType,
} from 'types/types';
import { IFormValues } from 'components/Forms/OfferForm/OfferForm';
import { IHandleSelectChange } from 'components/Select/Select';
import { routes } from 'router/routes';

interface Props {
  initialFormValues: IFormValues;
  type: OfferFormType;
}

const useOfferForm = ({ initialFormValues, type }: Props) => {
  const user = useContext(UserContext) as IUserContext;
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const dispatch = useAppDispatch();
  const modelSelectRef: any = useRef();
  const navigate = useNavigate();
  const location = useParams();
  const { getOfferById } = useAPI();
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
            showMessage({ textContent: err, buttonContent: 'Sporóbuj ponownie' });
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
            showMessage({ textContent: err, buttonContent: 'Sporóbuj ponownie' });
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
    handleMakeSelectChange,
    handleSelectChange,
    handleInputChange,
    handleFileInputChange,
    handleSubmit,
  };
};

export default useOfferForm;
