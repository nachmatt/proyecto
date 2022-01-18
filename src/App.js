import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

//genero el wrapper <BrowserRouter> para poder realizar las rutas
//genero las diferentes rutas dentro de un <Routes> y el mismo dentro de 
//un <Container> (que estiliza los que esté dentro acorde a @mui)
//añado el <SimpleBottomNavigation> (elemento navbar inferior de @mui)
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/trending' component={Trending} exact/>
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
