import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("Deve ser renderizado", () => {
    render(<App />);

    expect(screen.getByText("Olha só que legal minha miniatura do Batmóvel.")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
    );
  });
});
