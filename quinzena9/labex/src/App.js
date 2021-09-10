import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import TripDetailsPage from './pages/TripDetailsPage';
import CreateTripPage from './pages/CreateTripPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path={'/'}>
            <HomePage />
          </Route>

          <Route exact path={"/login"} >
            <LoginPage />
          </Route>

          <Route exact path={"/admin"} >
            <AdminHomePage />
          </Route>

          <Route exact path={"/criar-viagem"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/detalhe"} >
            <TripDetailsPage />
          </Route>

          <Route exact path={"/list-trips"}>
            <ListTripsPage />
          </Route>

          <Route exact path={"/form"}>
            <ApplicationFormPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
