import { useState, useContext, useEffect } from 'react';
import { CarsContext } from 'contexts/contexts';
import { ICarsContext, Bodystyle, Make, Model, Color, FuelType, Transmission } from 'types/types';
import { ISelectOption } from 'components/Select/Select';

interface ISelectsOptions {
  bodystyle: ISelectOption<Bodystyle>[];
  make: ISelectOption<Make>[];
  model: ISelectOption<Model>[] | undefined;
  price: ISelectOption<string>[];
  yearOfProduction: ISelectOption<string>[];
  mileage: ISelectOption<string>[];
  fuelType: ISelectOption<FuelType>[];
  transmission: ISelectOption<Transmission>[];
  color: ISelectOption<Color>[];
}

const useCarFormSelects = (selectedMake: Make | null) => {
  const { cars } = useContext(CarsContext) as ICarsContext;
  const [modelsOfSelectedMake, setModels] = useState<ISelectOption<Model>[] | undefined>(undefined);
  const selectsOptions: ISelectsOptions = {
    bodystyle: [
      { value: 'auta małe', label: 'auta małe' },
      { value: 'auta miejskie', label: 'auta miejskie' },
      { value: 'coupe', label: 'coupe' },
      { value: 'kabriolet', label: 'kabriolet' },
      { value: 'kombi', label: 'kombi' },
      { value: 'kompakt', label: 'kompakt' },
      { value: 'minivan', label: 'minivan' },
      { value: 'sedan', label: 'sedan' },
      { value: 'SUV', label: 'SUV' },
    ],
    make: cars.map(car => {
      return { value: car.make, label: car.make };
    }),
    model: modelsOfSelectedMake,
    price: [
      { value: '2000', label: '2 000' },
      { value: '5000', label: '5 000' },
      { value: '7500', label: '7 500' },
      { value: '10000', label: '10 000' },
      { value: '15000', label: '15 000' },
      { value: '25000', label: '25 000' },
      { value: '35000', label: '35 000' },
      { value: '50000', label: '50 000' },
      { value: '75000', label: '75 000' },
      { value: '100000', label: '100 000' },
      { value: '250000', label: '250 000' },
      { value: '500000', label: '500 000' },
      { value: '1000000', label: '1 000 000' },
    ],
    yearOfProduction: [
      { value: '2022', label: '2022' },
      { value: '2021', label: '2021' },
      { value: '2020', label: '2020' },
      { value: '2019', label: '2019' },
      { value: '2018', label: '2018' },
      { value: '2017', label: '2017' },
      { value: '2016', label: '2016' },
      { value: '2015', label: '2015' },
      { value: '2014', label: '2014' },
      { value: '2013', label: '2013' },
      { value: '2012', label: '2012' },
      { value: '2011', label: '2011' },
      { value: '2010', label: '2010' },
      { value: '2009', label: '2009' },
      { value: '2008', label: '2008' },
      { value: '2007', label: '2007' },
      { value: '2006', label: '2006' },
      { value: '2005', label: '2005' },
      { value: '2004', label: '2004' },
      { value: '2003', label: '2003' },
      { value: '2002', label: '2002' },
      { value: '2001', label: '2001' },
      { value: '2000', label: '2000' },
      { value: '1999', label: '1999' },
      { value: '1998', label: '1998' },
      { value: '1997', label: '1997' },
      { value: '1996', label: '1996' },
      { value: '1995', label: '1995' },
      { value: '1994', label: '1994' },
      { value: '1993', label: '1993' },
      { value: '1992', label: '1992' },
    ],
    mileage: [
      { value: '20000', label: '20 000' },
      { value: '35000', label: '35 000' },
      { value: '50000', label: '50 000' },
      { value: '75000', label: '75 000' },
      { value: '100000', label: '100 000' },
      { value: '150000', label: '150 000' },
      { value: '200000', label: '200 000' },
      { value: '250000', label: '250 000' },
      { value: '300000', label: '300 000' },
      { value: '350000', label: '350 000' },
      { value: '400000', label: '400 000' },
    ],
    fuelType: [
      { value: 'benzyna', label: 'benzyna' },
      { value: 'benzyna + LPG', label: 'benzyna+LPG' },
      { value: 'diesel', label: 'diesel' },
      { value: 'elekrtyczny', label: 'elektryczny' },
      { value: 'hybryda', label: 'hybryda' },
    ],
    transmission: [
      { value: 'automatyczna', label: 'automatyczna' },
      { value: 'manualna', label: 'manualna' },
    ],
    color: [
      { value: 'biały', label: 'biały' },
      { value: 'bordowy', label: 'bordowy' },
      { value: 'brązowy', label: 'brązowy' },
      { value: 'czarny', label: 'czarny' },
      { value: 'czerwony', label: 'czerwony' },
      { value: 'grafitowy', label: 'grafitowy' },
      { value: 'metaliczny', label: 'metaliczny' },
      { value: 'niebieski', label: 'niebieski' },
      { value: 'różowy', label: 'różowy' },
      { value: 'srebrny', label: 'srebrny' },
      { value: 'zielony', label: 'zielony' },
      { value: 'złoty', label: 'złoty' },
      { value: 'żółty', label: 'żółty' },
    ],
  };

  const getModelsOfSelectedCar = (make: Make | null) => {
    const models = cars.find(car => car.make === make)?.models;
    const result: ISelectOption<Model>[] | undefined = models?.map(
      (model): ISelectOption<Model> => ({
        value: model,
        label: `${model}`,
      })
    );
    return result;
  };

  useEffect(() => {
    setModels(getModelsOfSelectedCar(selectedMake));
  }, [selectedMake]);

  return { selectsOptions };
};

export default useCarFormSelects;
