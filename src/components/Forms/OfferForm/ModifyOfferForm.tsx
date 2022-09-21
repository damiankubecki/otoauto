import React, { useState, useEffect } from 'react';
import useOfferForm from 'hooks/useOfferForm';
import AddModifyOfferForm, { IFormValues } from './OfferForm';
import { LoadingSpinner } from '../FormsElements';
import { useParams } from 'react-router';
import useAPI from 'hooks/useApi';

const ModifyOfferForm = () => {
  const location = useParams();
  const { getOfferById } = useAPI();
  const [initialFormValues, setInitialFormValues] = useState<IFormValues>({
    bodystyle: null,
    make: null,
    model: null,
    yearOfProduction: null,
    mileage: null,
    transmission: null,
    fuelType: null,
    cost: null,
    color: null,
    engine: null,
    description: null,
    location: null,
    image: '',
  });

  useEffect(() => {
    const fetchInitialFormValues = async () => {
      await getOfferById(location.id || '').then(res => setInitialFormValues(res));
    };

    fetchInitialFormValues();
  }, []);

  const {
    selectsOptions,
    modelSelectRef,
    isModelsSelectDisabled,
    formValues,
    message,
    isLoading,
    handleMakeSelectChange,
    handleSelectChange,
    handleInputChange,
    handleFileInputChange,
    handleSubmit,
  } = useOfferForm({ initialFormValues, type: 'modify' });

  return (
    <>
      {isLoading ? (
        <message.container>
          <LoadingSpinner />
        </message.container>
      ) : message.isActive ? (
        <message.container>
          <message.element />
        </message.container>
      ) : (
        <AddModifyOfferForm
          title="Modyfikuj"
          selectsOptions={selectsOptions}
          modelSelectRef={modelSelectRef}
          isModelsSelectDisabled={isModelsSelectDisabled}
          values={formValues}
          handleMakeSelectChange={handleMakeSelectChange}
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
          handleFileInputChange={handleFileInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default ModifyOfferForm;
