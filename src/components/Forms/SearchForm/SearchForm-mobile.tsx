import React, { useState } from 'react';
import useSearchForm from 'hooks/useSearchForm';
import {
  Wrapper,
  SectionsContainer,
  ButtonContainer,
  DoubleSelectContainer,
  Section,
  ButtonExpand,
} from './SearchFormElements';
import { Form, FormField, Select, Title, Button } from '../FormsElements';

const SearchFormMobile = () => {
  const {
    modelSelectRef,
    selectsOptions,
    isModelsSelectDisabled,
    matchingOffersNumber,
    handleSelectChange,
    handleSubmit,
  } = useSearchForm();
  const [detailedSearchActive, setDetailedSearchActive] = useState(false);

  const handleExpandButtonClick = () => setDetailedSearchActive(!detailedSearchActive);

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
                isWide
              />
            </FormField>
            <FormField title="Marka pojazdu" id="make">
              <Select
                options={selectsOptions.make}
                name="make"
                handleChange={(selectname, value) => {
                  handleSelectChange(selectname, value);
                  modelSelectRef.current.clearValue();
                }}
                isWide
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
                isWide
              />
            </FormField>
            <FormField title="Rodzaj paliwa" id="fuelType">
              <Select
                options={selectsOptions.fuelType}
                name="fuelType"
                handleChange={handleSelectChange}
                isWide
              />
            </FormField>
          </Section>
          <ButtonExpand type="button" onClick={handleExpandButtonClick}>
            {detailedSearchActive ? 'Zwi??' : 'Zaawansowane wyszukiwanie'}
          </ButtonExpand>
          {detailedSearchActive && (
            <>
              <Section size="normal">
                <FormField title="Skrzynia bieg??w" id="transmission">
                  <Select
                    options={selectsOptions.transmission}
                    name="transmission"
                    handleChange={handleSelectChange}
                    isWide
                  />
                </FormField>
                <FormField title="Kolor" id="color">
                  <Select
                    options={selectsOptions.color}
                    name="color"
                    handleChange={handleSelectChange}
                    isWide
                  />
                </FormField>
              </Section>
              <Section size="wide">
                <FormField title="Cena (PLN)" id="price">
                  <DoubleSelectContainer>
                    <Select
                      options={selectsOptions.price}
                      name="price_from"
                      placeholder="od"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                    <Select
                      options={selectsOptions.price}
                      name="price_to"
                      placeholder="do"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                  </DoubleSelectContainer>
                </FormField>
                <FormField title="Rok produkcji" id="yearOfProduction">
                  <DoubleSelectContainer>
                    <Select
                      options={selectsOptions.yearOfProduction}
                      name="yearOfProduction_from"
                      placeholder="od"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                    <Select
                      options={selectsOptions.yearOfProduction}
                      name="yearOfProduction_to"
                      placeholder="do"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                  </DoubleSelectContainer>
                </FormField>
                <FormField title="Przebieg (km)" id="mileage">
                  <DoubleSelectContainer>
                    <Select
                      options={selectsOptions.mileage}
                      name="mileage_from"
                      placeholder="od"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                    <Select
                      options={selectsOptions.mileage}
                      name="mileage_to"
                      placeholder="do"
                      isCreatable
                      handleChange={handleSelectChange}
                    />
                  </DoubleSelectContainer>
                </FormField>
              </Section>
            </>
          )}
        </SectionsContainer>
        <ButtonContainer>
          <Button bigger red>{`Poka?? (${matchingOffersNumber})`}</Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

export default SearchFormMobile;
