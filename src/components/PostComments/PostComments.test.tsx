import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from ".";
import userEvent from "@testing-library/user-event";

describe("PostComments Component", () => {
  it("deve permitir adicionar um comentário", () => {
    render(<PostComments />);

    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /comentar/i });

    userEvent.type(textarea, "Meu comentário de teste");
    fireEvent.click(button);

    expect(screen.getByText("Meu comentário de teste")).toBeInTheDocument();
  });

  it("não deve permitir comentários vazios", () => {
    render(<PostComments />);

    const button = screen.getByRole("button", { name: /comentar/i });

    fireEvent.click(button);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("não deve permitir comentários vazios", () => {
    render(<PostComments />);

    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /comentar/i });

    fireEvent.change(textarea, { target: { value: " " } }); 
    fireEvent.click(button);

    expect(screen.queryByText(" ")).not.toBeInTheDocument(); 
});

});
