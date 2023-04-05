import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPatientsPage from './pages/AllPatients';
import NewPatientPage from './pages/NewPatient';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllPatientsPage />
        </Route>
        <Route path='/new-Patient'>
          <NewPatientPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
