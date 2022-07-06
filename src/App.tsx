function App() {
  return (
    <div>
      <header className="py-4">
        <h1 className="text-4xl text-center tracking-widest">Togol</h1>
      </header>
      <main className="flex justify-center">
        <div className="flex space-x-2">
          <input
            className="border shadow rounded-lg focus:outline-none px-4 py-2"
            type="text"
          />
          <button className="px-4 shadow py-2 border rounded-lg">+</button>
        </div>
      </main>
    </div>
  );
}

export default App;
