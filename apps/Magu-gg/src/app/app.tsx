import { Outlet } from 'react-router-dom';
import Header from './UI/Header';
export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
