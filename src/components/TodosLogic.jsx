import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

function TodoLogic() {
  const todos = [
    {
      id: 1,
      title: "setup development evironment",
      compeleted: true,
    },
    {
      id: 2,
      title: "develop website evironment",
      compeleted: true,
    },
    {
      id: 3,
      title: "Deploy to live server",
      compeleted: true,
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodoList todoProps={todos} />
    </div>
  );
}

export default TodoLogic;
