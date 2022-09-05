import React from 'react';
import styled from 'styled-components';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin: 0 auto;
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.primary};
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.fontColor};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Label = styled.label`
  align-self: flex-start;
  display: block;
  padding: 0 0 3px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.boldFont};
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 15px;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.fontColor};
  outline: none;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.fontColorAdditional200};
  }
`;

const ElementContainer = styled.div`
  margin: 30px 0 0;
`;

interface IFormFieldProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const FormFieldWrapper = styled.div`
  margin: 15px 0 0;
`;

const FormField = ({ id, title, children }: IFormFieldProps) => (
  <FormFieldWrapper>
    <Label htmlFor={id}>{title}</Label>
    {children}
  </FormFieldWrapper>
);

export { Form, FormField, ElementContainer, LoadingSpinner, Title, Label, Input, Select, Button };
