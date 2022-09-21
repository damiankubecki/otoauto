/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ISelectsOptions } from 'hooks/useCarFormSelects';
import { IHandleInputChange, ICarOffer, Nullable } from 'types/types';
import { IHandleSelectChange } from 'components/Select/Select';
import {
  Form,
  Title,
  FormField,
  Select,
  Input,
  Textarea,
  Button,
  ButtonContainer,
} from '../FormsElements';
import { SectionsContainer, Section } from './OfferFormElements';

export type IFormValues = Partial<Nullable<ICarOffer>> | ICarOffer;

interface Props {
  title: string;
  selectsOptions: ISelectsOptions;
  modelSelectRef: any;
  isModelsSelectDisabled: boolean;
  values: IFormValues;
  handleSelectChange: IHandleSelectChange;
  handleMakeSelectChange: IHandleSelectChange;
  handleInputChange: IHandleInputChange;
  handleFileInputChange: IHandleInputChange;
  handleSubmit: (e: any) => void;
}

const OfferForm = ({
  title,
  selectsOptions,
  modelSelectRef,
  isModelsSelectDisabled,
  values,
  handleSelectChange,
  handleMakeSelectChange,
  handleInputChange,
  handleFileInputChange,
  handleSubmit,
}: Props) => {
  const defaultValues = {
    bodystyle: selectsOptions.bodystyle.find(option => option.value === values.bodystyle),
    make: selectsOptions.make.find(option => option.value === values.make),
    model: selectsOptions.model
      ? selectsOptions.model.find(option => option.value === values.model)
      : undefined,
    yearOfProduction: selectsOptions.yearOfProduction.find(
      option => Number(option.value) === values.yearOfProduction
    ),
    transmission: selectsOptions.transmission.find(option => option.value === values.transmission),
    fuelType: selectsOptions.fuelType.find(option => option.value === values.fuelType),
    color: selectsOptions.color.find(option => option.value === values.color),
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <SectionsContainer>
          <Section>
            <FormField title="Typ nadwozia" id="bodystyle">
              <Select
                name="bodystyle"
                options={selectsOptions.bodystyle}
                defaultValue={defaultValues.bodystyle}
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
            <FormField title="Marka pojazdu" id="make">
              <Select
                name="make"
                options={selectsOptions.make}
                defaultValue={defaultValues.make}
                handleChange={handleMakeSelectChange}
                isWide
              />
            </FormField>
            <FormField title="Model pojazdu" id="model">
              <Select
                ref={modelSelectRef}
                name="model"
                options={selectsOptions.model || []}
                defaultValue={defaultValues.model}
                handleChange={handleSelectChange}
                isWide
                isDisabled={isModelsSelectDisabled}
              />
            </FormField>
            <FormField title="Rok produkcji" id="yearOfProduction">
              <Select
                name="yearOfProduction"
                options={selectsOptions.yearOfProduction}
                defaultValue={defaultValues.yearOfProduction}
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
          </Section>
          <Section>
            <FormField title="Skrzynia biegów" id="transmission">
              <Select
                name="transmission"
                options={selectsOptions.transmission}
                defaultValue={defaultValues.transmission}
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
            <FormField title="Rodzaj paliwa" id="fuelType">
              <Select
                name="fuelType"
                options={selectsOptions.fuelType}
                defaultValue={defaultValues.fuelType}
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
            <FormField title="Kolor" id="color">
              <Select
                name="color"
                options={selectsOptions.color}
                defaultValue={defaultValues.color}
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
            <FormField title="Przebieg (km)" id="mileage">
              <Input
                type="number"
                name="mileage"
                value={values.mileage || ''}
                onChange={handleInputChange}
                required
              />
            </FormField>
          </Section>
          <Section>
            <FormField title="Moc (KM)" id="hp">
              <Input
                type="number"
                name="hp"
                value={values.hp || ''}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField title="Pojemność silnika (cm3)" id="engine">
              <Input
                type="number"
                name="engine"
                value={values.engine || ''}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField title="Lokalizacja" id="location">
              <Input
                type="text"
                name="location"
                value={values.location || ''}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField title="Cena (PLN)" id="cost">
              <Input
                type="number"
                name="cost"
                value={values.cost || ''}
                onChange={handleInputChange}
                required
              />
            </FormField>
          </Section>
        </SectionsContainer>
        <FormField title="Zdjęcie (niewymagane)" id="image">
          <Input type="file" name="image" accept="image/*" onChange={handleFileInputChange} />
        </FormField>
        <FormField title="Opis" id="description">
          <Textarea
            name="description"
            maxLength={1200}
            value={values.description || ''}
            onChange={handleInputChange}
            required
          />
        </FormField>
        <ButtonContainer>
          <Button red bigger>
            Potwierdź
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default OfferForm;
