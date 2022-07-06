import { Todo } from "./components/Todo";
import { TodoItemInput } from "./components/TodoItemInput";

function App() {
  return (
    <div>
      <header className="py-4">
        <h1 className="text-4xl text-center tracking-widest">Togol</h1>
      </header>
      <main className="flex justify-center px-4">
        <div className="grid gap-4 max-w-lg">
          <TodoItemInput />
          <Todo />
        </div>
      </main>
    </div>
  );
}

export default App;
