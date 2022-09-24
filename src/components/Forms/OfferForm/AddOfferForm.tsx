import React from 'react';
import useOfferForm from 'hooks/useOfferForm';
import AddModifyOfferForm, { IFormValues } from './OfferForm';

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
    handleMakeSelectChange,
    handleSelectChange,
    handleInputChange,
    handleFileInputChange,
    handleSubmit,
  } = useOfferForm({ initialFormValues, type: 'add' });

  return (
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
  );
};

export default AddOfferForm;
