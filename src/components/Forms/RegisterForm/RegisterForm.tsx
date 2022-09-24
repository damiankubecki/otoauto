import React from 'react';
import useRegisterForm from 'hooks/useRegisterForm';
import { Form, FormField, Input, ButtonContainer, Button } from '../FormsElements';

const RegisterForm = () => {
  const { formValues, handleInputChange, handleFormSubmit } = useRegisterForm();

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormField title="Nazwa użytkownika:" id="username">
        <Input
          id="username"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          maxLength={30}
        />
      </FormField>
      <FormField title="Hasło:" id="password">
        <Input
          id="password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField title="Powtórz hasło:" id="password-repeat">
        <Input
          id="password_repeat"
          type="password"
          name="password_repeat"
          value={formValues.password_repeat}
          onChange={handleInputChange}
        />
      </FormField>
      <ButtonContainer>
        <Button>Utwórz konto</Button>
      </ButtonContainer>
    </Form>
  );
};

export default RegisterForm;
