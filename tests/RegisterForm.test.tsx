import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import RegisterForm from "../src/app/components/RegisterForm";
describe("RegisterForm Component", () => {
  test("renderiza o título corretamente", () => {
    render(<RegisterForm onSubmit={jest.fn()} />);
    
    expect(screen.getByText("Registro de Usuário")).toBeInTheDocument();
  });

  test("renderiza os campos de input corretamente", () => {
    render(<RegisterForm onSubmit={jest.fn()} />);

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Sobrenome")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
    expect(screen.getByLabelText("Dia")).toBeInTheDocument();
    expect(screen.getByLabelText("Mês")).toBeInTheDocument();
    expect(screen.getByLabelText("Ano")).toBeInTheDocument();
  });

  test("permite preencher os campos de input", async () => {
    render(<RegisterForm onSubmit={jest.fn()} />);
    
    const firstNameInput = screen.getByLabelText("Nome");
    await userEvent.type(firstNameInput, "Vitor");

    expect(firstNameInput).toHaveValue("Vitor");
  });

  test("chama a função onSubmit ao clicar no botão Registrar", async () => {
    const mockOnSubmit = jest.fn();
    render(<RegisterForm onSubmit={mockOnSubmit} />);

    const firstNameInput = screen.getByLabelText("Nome");
    const lastNameInput = screen.getByLabelText("Sobrenome");
    const emailInput = screen.getByLabelText("E-mail");
    const passwordInput = screen.getByLabelText("Senha");
    const birthDayInput = screen.getByLabelText("Dia");
    const birthMonthInput = screen.getByLabelText("Mês");
    const birthYearInput = screen.getByLabelText("Ano");
    const submitButton = screen.getByRole("button", { name: /registrar/i });

    await userEvent.type(firstNameInput, "Vitor");
    await userEvent.type(lastNameInput, "Silva");
    await userEvent.type(emailInput, "vitor@email.com");
    await userEvent.type(passwordInput, "123456");
    await userEvent.type(birthDayInput, "15");
    await userEvent.type(birthMonthInput, "08");
    await userEvent.type(birthYearInput, "2000");

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      firstName: "Vitor",
      lastName: "Silva",
      email: "vitor@email.com",
      password: "123456",
      birthDay: "15",
      birthMonth: "08",
      birthYear: "2002",
    });
  });
});
