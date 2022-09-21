import React from 'react';
import styled from 'styled-components';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
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
  height: 36px;
  width: 100%;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.fontColor};
  outline: none;

  &.wide {
    width: 130px;
    padding: 5px 10px;
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.fontColorAdditional200};
  }

  &[type='file'] {
    padding: 5px 0;
    background-color: transparent;

    &::file-selector-button {
      padding: 3px 15px;
      color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.fontColorAdditional200};
      font-size: ${({ theme }) => theme.fontSize.s};
      border-radius: 5px;
      border: none;
      font-weight: ${({ theme }) => theme.boldFont};
      cursor: pointer;
      transition: 0.15s;

      &:hover {
        background-color: ${({ theme }) => theme.fontColorAdditional100};
      }
    }

    &:focus {
      border-bottom: none;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 350px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.fontColor};
  outline: none;
`;

const ElementContainer = styled.div`
  margin: 10px 0 0;
`;

const ButtonContainer = styled.div`
  margin: 30px auto 0;
`;

interface IFormFieldProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const FormFieldWrapper = styled.div`
  margin: 15px auto 0;
  width: 100%;
`;

const FormFieldChildrenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormField = ({ id, title, children }: IFormFieldProps) => (
  <FormFieldWrapper>
    <Label htmlFor={id}>{title}</Label>
    <FormFieldChildrenContainer>{children}</FormFieldChildrenContainer>
  </FormFieldWrapper>
);

export {
  Form,
  FormField,
  ElementContainer,
  LoadingSpinner,
  Title,
  Label,
  Input,
  Textarea,
  Select,
  ButtonContainer,
  Button,
};
