import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from ".";
import userEvent from "@testing-library/user-event";

describe("PostComments Component", () => {
    //Teste Dois Comentários
    it("deve permitir a inserção de dois comentários", () => {
        render(<PostComments />);

        const textarea = screen.getByTestId("comment-input");
        const button = screen.getByTestId("comment-button");

        // Adicionando o primeiro comentário
        fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
        fireEvent.click(button);

        // Adicionando o segundo comentário
        fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
        fireEvent.click(button);

        // Verifica se os dois comentários foram renderizados
        const comments = screen.getAllByTestId("comment-item");
        expect(comments).toHaveLength(2);

        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
    });
    //Teste Comentários vazios
    it("não deve permitir comentários vazios", () => {
        render(<PostComments />);
    
        const button = screen.getByTestId("comment-button");
    
        fireEvent.click(button);
    
        expect(screen.queryByTestId("comment-item")).not.toBeInTheDocument();
      });
    
      it("não deve permitir comentários vazios com apenas espaços", () => {
        render(<PostComments />);
    
        const textarea = screen.getByTestId("comment-input");
        const button = screen.getByTestId("comment-button");
    
        fireEvent.change(textarea, { target: { value: " " } });
        fireEvent.click(button);
    
        expect(screen.queryByTestId("comment-item")).not.toBeInTheDocument();
      });

});
