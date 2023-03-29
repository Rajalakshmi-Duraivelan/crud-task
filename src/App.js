
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { CreateUser } from './Components/CreateUser';
import  EditUser from './Components/EditUser';
import { NoPage } from './Components/NoPage';
import UserComponent from './Components/UserComponent';
import { StudDetails } from './Components/StudDetails';
function App() {
  
  return (
    <div className="App">
      
      <Switch>

        <Route exact path="/">
          <UserComponent />
        </Route>
        <Route path="/create/user">
          <CreateUser />
        </Route>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
        <Route path="/user/:id">
          <StudDetails />
        </Route>

       {/*  <Route path="/hooks">
          <Hooks></Hooks>
        </Route> */}
        
       {/*  <Route path = "/students">
          <Redirect path="/"/>
        </Route> */}
        {/* <Route path="/hooks">
          <Hooks/>
        </Route> */}
        <Route path = "**">
          <NoPage/>
        </Route>
    </Switch>
    </div>
    
  );
}

export default App;
