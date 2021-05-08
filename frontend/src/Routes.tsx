import Dashboard from "pages/Dashboard";
import Home from "pages/Homes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>        
      </Switch>  
    </BrowserRouter>
  );

}

export default Routes;
