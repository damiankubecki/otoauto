import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faUser,
  faHeart,
  faMoon,
  faSun,
  faLocationDot,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

export interface IIconProps {
  color: string;
  size: SizeProp;
  icon: IconProp;
}

const useFontAwesome = () => {
  library.add(faPlus, faUser, faHeart, faMoon, faSun, faLocationDot, faTrashCan, faPenToSquare);

  const Icon = ({ color, size, icon }: IIconProps): JSX.Element => (
    <FontAwesomeIcon color={color} size={size} icon={icon} />
  );

  return { Icon };
};
export default useFontAwesome;
