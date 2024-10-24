import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/home/Home';
import SignUp from './Pages/signup/SignUp';
import Login from './Pages/login/Login';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
