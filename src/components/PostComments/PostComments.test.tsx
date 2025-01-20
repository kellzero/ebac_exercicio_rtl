import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("Testando a funcionalidade de comentários", () => {
  it("Deve permitir a inserção de dois comentários", () => {
    render(<App />);

    const inputElement = screen.getByTestId("comment-input");
    const buttonElement = screen.getByTestId("add-comment-button");

    fireEvent.change(inputElement, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Segundo comentário" } });
    fireEvent.click(buttonElement);

    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
