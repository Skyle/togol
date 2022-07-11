import { Todos } from './components/Todos';
import { TodoItemInput } from './components/TodoItemInput';
import { Routes, Route, NavLink } from 'react-router-dom';
import { IndexPage } from './pages';
import { Register } from './pages/register';
function App() {
  return (
    <div>
      <header className='py-4'>
        <h1 className='text-4xl text-center tracking-widest font-serif'>
          Zitrone 🍋
        </h1>
      </header>
      <main className='flex justify-center px-4'>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
