import React from 'react';
import useRegisterForm from 'hooks/useRegisterForm';
import { Form, FormField, ElementContainer, LoadingSpinner, Input, Button } from '../FormsElements';

const RegisterForm = () => {
  const { isLoading, message, form, submitFn } = useRegisterForm();

  return (
    <Form onSubmit={submitFn}>
      {isLoading ? (
        <ElementContainer>
          <LoadingSpinner />
        </ElementContainer>
      ) : message.isActive ? (
        <ElementContainer>
          <message.element />
        </ElementContainer>
      ) : (
        <>
          <FormField title="Nazwa użytkownika:" id="username">
            <Input
              id="username"
              type="text"
              name="username"
              value={form.values.username}
              onChange={form.handleInputChange}
            />
          </FormField>
          <ElementContainer>
            <FormField title="Hasło:" id="password">
              <Input
                id="password"
                type="password"
                name="password"
                value={form.values.password}
                onChange={form.handleInputChange}
              />
            </FormField>
          </ElementContainer>
          <ElementContainer>
            <FormField title="Powtórz hasło:" id="password-repeat">
              <Input
                id="password_repeat"
                type="password"
                name="password_repeat"
                value={form.values.password_repeat}
                onChange={form.handleInputChange}
              />
            </FormField>
          </ElementContainer>
          <ElementContainer>
            <Button bigger>Utwórz konto</Button>
          </ElementContainer>
        </>
      )}
    </Form>
  );
};

export default RegisterForm;
