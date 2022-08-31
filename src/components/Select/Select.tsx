/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useContext } from 'react';
import SelectComponent from 'react-select';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';

export interface ISelectOption<T> {
  value: T;
  label: string;
}

interface IProps<T> {
  name: string;
  options: ISelectOption<T>[];
  handleChange: (selectName: string, value: T) => void;
  isDisabled?: boolean;
  isSearchable?: boolean;
}

const Select = <T,>({
  name,
  options,
  handleChange,
  isDisabled = false,
  isSearchable = true,
}: IProps<T>) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;

  const customStyles = {
    control: (provided: any, state: { isDisabled: any; isFocused: any }) => ({
      ...provided,
      backgroundColor: isDisabled ? activeTheme.additional : activeTheme.secondary,
      border: 0,
      width: 200,
      minHeight: 'auto',
      color: activeTheme.fontColor,
      cursor: 'pointer',
      outline: 'none',
      boxShadow: state.isFocused ? `0 0 0 1px ${activeTheme.fontColorAdditional200}` : 'none',
      fontSize: activeTheme.fontSize.s,
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: activeTheme.secondary,
      width: 200,
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      borderBottom: activeTheme.fontColorAdditional200,
      color: activeTheme.fontColor,
      backgroundColor: state.isSelected ? activeTheme.secondary : activeTheme.primary,
      padding: '5px 10px',
      fontSize: activeTheme.fontSize.s,
      '&:hover': {
        color: activeTheme.fontColorAdditional200,
        backgroundColor: activeTheme.secondary,
        cursor: 'pointer',
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      transition: 'opacity 300ms',
      color: activeTheme.fontColor,
    }),
  };

  return (
    <Fragment>
      <SelectComponent
        className="basic-single"
        classNamePrefix="select"
        placeholder="Wybierz..."
        noOptionsMessage={() => 'brak opcji'}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        isClearable
        hideSelectedOptions
        name={`${name}`}
        onChange={(e: any) => handleChange(`${name}`, e ? e.value : null)}
        options={options}
        styles={customStyles}
      />
    </Fragment>
  );
};

export default Select;
