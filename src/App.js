import '../src/styles/styles.scss'
import { Home } from './pages/Home'
import { InvestorForm } from './pages/InvestorForm'
import { RequestForm } from './pages/RequestForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      {/* <Home />
      <InvestorsForm/> */}
              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/investor-form">
            <InvestorForm />
          </Route>
          <Route path="/contact-form">
            <RequestForm />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
