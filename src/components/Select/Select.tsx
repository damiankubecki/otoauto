/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, Fragment, useContext, useRef, useImperativeHandle } from 'react';
import SelectComponent from 'react-select';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';

export interface ISelectOption<T> {
  value: T;
  label: string;
}

interface IProps {
  name: string;
  options: ISelectOption<string>[];
  handleChange: (selectName: string, value: string) => void;
  isDisabled?: boolean;
  isSearchable?: boolean;
}

const Select = forwardRef(
  ({ name, options, handleChange, isDisabled, isSearchable }: IProps, ref: any) => {
    const selectElement: any = useRef();
    useImperativeHandle(ref, () => ({
      clearValue() {
        selectElement.current.clearValue();
      },
    }));
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
      menuList: (provided: any) => ({
        ...provided,

        '::-webkit-scrollbar': {
          width: '3px',
          height: '0px',
        },
        '::-webkit-scrollbar-track': {
          background: activeTheme.secondary,
        },
        '::-webkit-scrollbar-thumb': {
          background: activeTheme.fontColorAdditional200,
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: activeTheme.fontColorAdditional200,
        },
      }),
    };

    return (
      <Fragment>
        <SelectComponent
          ref={selectElement}
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
  }
);

Select.displayName = 'Select';

export default Select;
