import React from 'react';
import { ICarOffer } from 'types/types';
import { Wrapper, Header, InfoItem } from './DetailsSectionElements';

interface Props {
  offer: ICarOffer | undefined;
}

const DetailsSection = ({ offer }: Props) => (
  <Wrapper>
    <Header>Szczegóły</Header>
    <InfoItem title="Data dodania">{offer?.date || 'bd'}</InfoItem>
    <InfoItem title="Nadwozie">{offer?.bodystyle || 'bd'}</InfoItem>
    <InfoItem title="Marka">{offer?.make || 'bd'}</InfoItem>
    <InfoItem title="Model">{offer?.model || 'bd'}</InfoItem>
    <InfoItem title="Rok produkcji">{offer?.yearOfProduction || 'bd'}</InfoItem>
    <InfoItem title="Przebieg">{offer?.mileage.toLocaleString() || 'bd'} km</InfoItem>
    <InfoItem title="Skrzynia biegów">{offer?.transmission || 'bd'}</InfoItem>
    <InfoItem title="Paliwo">{offer?.fuelType || 'bd'}</InfoItem>
    <InfoItem title="Moc">{offer?.hp || 'bd'} KM</InfoItem>
    <InfoItem title="Pojemność silnika">{offer?.engine || 'bd'} cm3</InfoItem>
    <InfoItem title="Kolor nadwiozia">{offer?.color || 'bd'}</InfoItem>
    <InfoItem title="Lokalizacja">{offer?.location || 'bd'}</InfoItem>
  </Wrapper>
);

export default DetailsSection;
