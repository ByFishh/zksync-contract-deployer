import HomePage from './pages/HomePage.tsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <main className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#121A2B] to-[#143089]">
      <HomePage />
      <ToastContainer />
    </main>
  );
};

export default App;
