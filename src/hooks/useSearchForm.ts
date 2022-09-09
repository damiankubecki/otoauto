/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { OffersContext } from 'contexts/contexts';
import { ISearchConditions, ICarOffer, IOffersContext } from 'types/types';
import useCarFormSelects from './useCarFormSelects';

const useSearchForm = () => {
  const navigate = useNavigate();
  const modelSelectRef: any = useRef();
  const { offers } = useContext(OffersContext) as IOffersContext;
  const [matchingOffers, setMatchingOffers] = useState<ICarOffer[] | null>(offers);
  const [isModelsSelectDisabled, setModelsSelectActivity] = useState(false);
  const [formValues, setFormValues] = useState<ISearchConditions>({
    bodystyle: null,
    make: null,
    model: null,
    price_from: null,
    price_to: null,
    yearOfProduction_from: null,
    yearOfProduction_to: null,
    mileage_from: null,
    mileage_to: null,
    fuelType: null,
    transmission: null,
    color: null,
  });
  const { selectsOptions } = useCarFormSelects(formValues.make || null);

  const handleSelectChange = (selectName: string, value: string) => {
    setFormValues(prevState => ({ ...prevState, [selectName]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`${routes.offers}`, { state: { offers: matchingOffers, conditions: formValues } });
  };

  useEffect(() => {
    const allOffers = [...offers];
    const matchingOffers = allOffers.filter(offer => {
      const {
        bodystyle,
        make,
        model,
        price_from,
        price_to,
        yearOfProduction_from,
        yearOfProduction_to,
        mileage_from,
        mileage_to,
        fuelType,
        transmission,
        color,
      } = formValues;

      if (
        (offer.make === make || !make) &&
        (offer.bodystyle === bodystyle || !bodystyle) &&
        (offer.model === model || !model) &&
        (offer.cost >= Number(price_from) || !price_from) &&
        (offer.cost <= Number(price_to) || !price_to) &&
        (offer.yearOfProduction >= Number(yearOfProduction_from) || !yearOfProduction_from) &&
        (offer.yearOfProduction <= Number(yearOfProduction_to) || !yearOfProduction_to) &&
        (offer.mileage >= Number(mileage_from) || !mileage_from) &&
        (offer.mileage <= Number(mileage_to) || !mileage_to) &&
        (offer.fuelType === fuelType || !fuelType) &&
        (offer.transmission === transmission || !transmission) &&
        (offer.color === color || !color)
      )
        return offer;
      return undefined;
    });
    setMatchingOffers(matchingOffers);
  }, [formValues]);

  useEffect(() => {
    setModelsSelectActivity(!formValues.make);
  }, [formValues.make]);

  return {
    modelSelectRef,
    selectsOptions,
    isModelsSelectDisabled,
    matchingOffersNumber: matchingOffers?.length,
    handleSelectChange,
    handleSubmit,
  };
};

export default useSearchForm;
