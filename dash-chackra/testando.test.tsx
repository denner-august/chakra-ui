import { render, screen } from "@testing-library/react";

import Home from "./src/pages";

describe("testando component index,tsx", () => {
  test("testando o nome dos inputs", () => {
    render(<Home />);
    const input1 = screen.getByText("Email");
    const input2 = screen.getByText("Password");
    expect(input1 && input2).toBeInTheDocument();
  });

  test("se o component está renderizando", () => {
    render(<Home />);
    const placeholderEmail = screen.getByPlaceholderText("Digite seu Email");
    const placeholderSenha = screen.getByPlaceholderText("Digite sua senha");
    expect(placeholderEmail && placeholderSenha).toBeInTheDocument();
  });

  test("tetando se o button existe", () => {
    render(<Home />);
    const buttonTest = screen.getByRole("submit");
    expect(buttonTest).toBeInTheDocument();
  });

  test("tetando conteudo do input", () => {
    render(<Home />);
    const inputEmail = screen.getByRole("email");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveTextContent("");
  });
});
