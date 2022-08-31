import React from 'react';
import useLoginForm from 'hooks/useLoginForm';
import { Form, FormField, ElementContainer, LoadingSpinner, Input, Button } from '../FormsElements';

const LoginForm = () => {
  const { isLoading, message, form, submitFn } = useLoginForm();

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
            <Button bigger>Zaloguj się</Button>
          </ElementContainer>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
