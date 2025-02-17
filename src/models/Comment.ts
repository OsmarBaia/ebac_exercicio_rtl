class Comment {
    id: number;
    comment: string;

    private static nextId = 0; // Contador estático para gerar ids únicos

    constructor(comment: string) {
        this.id = Comment.nextId++; // Incrementa o contador para o próximo id
        this.comment = comment;
    }
}

export default Comment;