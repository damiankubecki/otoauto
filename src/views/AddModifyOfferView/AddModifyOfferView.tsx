import React from 'react';
import { OfferFormType } from 'types/types';
import ViewTemplate from 'templates/ViewTemplate';
import { AddOfferForm, ModifyOfferForm } from './AddModifyOfferViewElements';

interface Props {
  type: OfferFormType;
}

const AddModifyOfferView = ({ type }: Props) => {
  return <ViewTemplate>{type === 'add' ? <AddOfferForm /> : <ModifyOfferForm />}</ViewTemplate>;
};

export default AddModifyOfferView;
