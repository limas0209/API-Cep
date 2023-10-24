import {} from 'react';
import Nav from './components/Nav';
import Rodape from './components/Rodape';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Rodape />
    </>
  );
}

export default App;
