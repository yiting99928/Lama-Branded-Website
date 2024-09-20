import { addPost, deletePost } from "@/lib/action";

export default function ServerAction() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>Test</button>
      </form>
      <form action={deletePost}>
        <input type="text" name="id" placeholder="postId" />
        <button>delete</button>
      </form>
    </div>
  );
}
