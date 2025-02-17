import Comment from "./Comment";

describe("Comment Model", () => {
  it("deve criar um comentário com id e conteúdo", () => {
    const comment = new Comment("Isso é um teste!");

    expect(comment.id).toBe(0);
    expect(comment.comment).toBe("Isso é um teste!");
  });

  it("não deve ter dois comentários com o mesmo id", () => {
    const comment1 = new Comment("Primeiro comentário");
    const comment2 = new Comment("Segundo comentário");

    expect(comment1.id).not.toBe(comment2.id);
  });
});
