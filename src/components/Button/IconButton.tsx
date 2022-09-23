/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { StyledIconButton as Button } from './ButtonElements';

interface Props {
  icon: IconProp;
  onClick?: (e: any) => void;
}

const IconButton = ({ icon, onClick }: Props) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();

  return (
    <Button onClick={onClick}>
      <Icon icon={icon} color={activeTheme.fontColor} size="1x" />
    </Button>
  );
};

export default IconButton;
