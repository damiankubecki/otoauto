import React from 'react';
import useOfferForm from 'hooks/useOfferForm';
import AddModifyOfferForm, { IFormValues } from './OfferForm';
import { LoadingSpinner } from '../FormsElements';

const AddOfferForm = () => {
  const initialFormValues: IFormValues = {
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
  };

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
  } = useOfferForm({ initialFormValues, type: 'add' });

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
          title="Dodaj ogłoszenie"
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

export default AddOfferForm;
