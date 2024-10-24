import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Home from './Pages/home/Home';
import SignUp from './Pages/signup/SignUp';
import Login from './Pages/login/Login';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
 
function App() {

  const { authIsReady , user} = useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/">
              { !user && <Redirect to = "/login"/> }
              { user && <Home /> }
          </Route>
        </Switch>
        <Switch>
            <Route exact path="/login">
              {user && <Redirect to = "/"/> }
              {!user && <Login />}
          </Route>
        </Switch>
        <Switch>
            <Route exact path="/signup">
              {user && <Redirect to="/" />}
              {!user && <SignUp />}
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
