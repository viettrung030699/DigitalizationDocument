import "./styles/style.scss";
import { LoginPage } from './pages/LoginPage/loginPage';
import { DashboardPage } from'./pages/DashboardPage/dashboardPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DocumentPage } from "./pages/DocumentPage/documentPage";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


function App() {
  return (
    // <DocumentPage />
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
          <Route path="/document" component={DocumentPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
