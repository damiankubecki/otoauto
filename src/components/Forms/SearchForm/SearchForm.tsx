import React from 'react';
import {
  Wrapper,
  SectionsContainer,
  ButtonContainer,
  Section,
  ProfileCardContainer,
  ProfileCard,
} from './SearchFormElements';
import { Form, FormField, Select, Title, Button } from '../FormsElements';
import useSearchForm from 'hooks/useSearchForm';

const SearchForm = () => {
  const {
    modelSelectRef,
    selectsOptions,
    isModelsSelectDisabled,
    matchingOffersNumber,
    handleSelectChange,
    handleSubmit,
  } = useSearchForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Czego szukasz?</Title>
        <SectionsContainer>
          <Section size="normal">
            <FormField title="Typ nadwozia" id="bodystyle">
              <Select
                options={selectsOptions.bodystyle}
                name="bodystyle"
                handleChange={handleSelectChange}
              />
            </FormField>
            <FormField title="Rodzaj paliwa" id="fuelType">
              <Select
                options={selectsOptions.fuelType}
                name="fuelType"
                handleChange={handleSelectChange}
              />
            </FormField>
          </Section>
          <Section size="normal">
            <FormField title="Marka pojazdu" id="make">
              <Select
                options={selectsOptions.make}
                name="make"
                handleChange={(selectname, value) => {
                  handleSelectChange(selectname, value);
                  modelSelectRef.current.clearValue();
                }}
              />
            </FormField>
            <FormField title="Skrzynia biegów" id="transmission">
              <Select
                options={selectsOptions.transmission}
                name="transmission"
                handleChange={handleSelectChange}
              />
            </FormField>
          </Section>
          <Section size="normal">
            <FormField title="Model pojazdu" id="model">
              <Select
                ref={modelSelectRef}
                options={selectsOptions.model || []}
                name="model"
                handleChange={handleSelectChange}
                isDisabled={isModelsSelectDisabled}
              />
            </FormField>
            <FormField title="Kolor" id="color">
              <Select
                options={selectsOptions.color}
                name="color"
                handleChange={handleSelectChange}
              />
            </FormField>
          </Section>
          <Section size="wide">
            <FormField title="Cena (PLN)" id="price">
              <>
                <Select
                  options={selectsOptions.price}
                  name="price_from"
                  placeholder="od"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
                <Select
                  options={selectsOptions.price}
                  name="price_to"
                  placeholder="do"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
              </>
            </FormField>
            <FormField title="Rok produkcji" id="yearOfProduction">
              <>
                <Select
                  options={selectsOptions.yearOfProduction}
                  name="yearOfProduction_from"
                  placeholder="od"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
                <Select
                  options={selectsOptions.yearOfProduction}
                  name="yearOfProduction_to"
                  placeholder="do"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
              </>
            </FormField>
            <FormField title="Przebieg (km)" id="mileage">
              <>
                <Select
                  options={selectsOptions.mileage}
                  name="mileage_from"
                  placeholder="od"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
                <Select
                  options={selectsOptions.mileage}
                  name="mileage_to"
                  placeholder="do"
                  isWide
                  isCreatable
                  handleChange={handleSelectChange}
                />
              </>
            </FormField>
          </Section>
          <Section size="wide">
            <ProfileCardContainer>
              <ProfileCard />
            </ProfileCardContainer>
          </Section>
        </SectionsContainer>
        <ButtonContainer>
          <Button bigger red>{`Pokaż (${matchingOffersNumber})`}</Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
