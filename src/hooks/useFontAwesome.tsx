import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUser, faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface IIconProps {
  color: string;
  size: SizeProp;
  icon: IconProp;
}

const useFontAwesome = () => {
  library.add(faPlus, faUser, faHeart, faMoon, faSun);

  const Icon = ({ color, size, icon }: IIconProps): JSX.Element => (
    <FontAwesomeIcon color={color} size={size} icon={icon} />
  );

  return { Icon };
};
export default useFontAwesome;
