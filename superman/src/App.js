
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './router-config';
import Banner from '../src/Components/Banner/Banner';
import Footer from '../src/Components/Footer/Footer'
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (

    <Fragment>
      <Banner></Banner>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Menu></Menu>
          <Routes>
            {routes.map(ruta => <Route
              element={ruta.component}
              key={ruta.path}
              path={ruta.path}
            ></Route>)}
          </Routes>
        </div>
      </BrowserRouter>
    <Footer></Footer>
    </Fragment>

  );
}

export default App;
