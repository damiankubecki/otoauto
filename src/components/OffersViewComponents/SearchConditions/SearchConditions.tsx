import React from 'react';
import { ISearchConditions } from 'types/types';
import { Wrapper, Text, Span } from './SearchConditionsElements';

const SearchConditions = ({
  bodystyle,
  make,
  model,
  transmission,
  fuelType,
  color,
  price_from,
  price_to,
  yearOfProduction_from,
  yearOfProduction_to,
  mileage_from,
  mileage_to,
}: ISearchConditions) => (
  <Wrapper>
    <Text>
      typ nadwozia: <Span>{bodystyle || 'dowolny'}</Span>
    </Text>
    <Text>
      marka: <Span>{make || 'dowolna'}</Span>
    </Text>
    <Text>
      model: <Span>{model || 'dowolny'}</Span>
    </Text>
    <Text>
      rodzaj paliwa: <Span>{fuelType || 'dowolny'}</Span>
    </Text>
    <Text>
      skrzynia biegów: <Span>{transmission || 'dowolna'}</Span>
    </Text>
    <Text>
      kolor: <Span>{color || 'dowolny'}</Span>
    </Text>
    <Text>
      cena:{' '}
      <Span>
        {price_from?.toLocaleString() || '???'} - {price_to?.toLocaleString() || '???'}
      </Span>
    </Text>
    <Text>
      rok produkcji:{' '}
      <Span>
        {yearOfProduction_from || '???'} - {yearOfProduction_to || '???'}
      </Span>
    </Text>
    <Text>
      przebieg:{' '}
      <Span>
        {mileage_from?.toLocaleString() || '???'} - {mileage_to?.toLocaleString() || '???'}
      </Span>
    </Text>
  </Wrapper>
);

export default SearchConditions;
