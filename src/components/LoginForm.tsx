import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface LoginFormInputs {
  username: string;
  password: string;
}

const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const Title = styled.h1`
  color: #6a0dad;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #6a0dad;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5a0cba;
  }

  /* Disable button if there are errors */
  ${({ disabled }) =>
    disabled &&
    `
      background-color: #ccc;
      cursor: not-allowed;
    `}
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    alert("Login realizado com sucesso!");
  };

  return (
    <FormContainer>
      <Title>Login</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Validação do e-mail */}
        <Input
          type="text"
          placeholder="E-mail"
          {...register("username", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "E-mail inválido",
            },
          })}
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

        {/* Validação da senha */}
        <Input
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "Senha deve ter pelo menos 6 caracteres",
            },
            validate: (value) =>
              /[A-Z]/.test(value) || "Senha deve conter pelo menos uma letra maiúscula",
          })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Button type="submit" disabled={!isValid}>
          Entrar
        </Button>
      </form>
    </FormContainer>
  );
};