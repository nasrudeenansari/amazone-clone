import Header from './component/Header'
import Home from './component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './component/Checkout';
import Login from './component/Login';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './component/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
auth.onAuthStateChanged(authUser =>{
  console.log("this user is :", authUser);
  if(authUser){
    dispatch({
      type:'SET_USER',
      user:authUser
    })
  }
  else{
    dispatch({
      type:'SET_USER',
      user:null
     })
  }
})
  },[])
  return (
    <Router>
      <div className="container">
        
        <Switch>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/checkout" >
          <Header />
            <Checkout />
          </Route>
          <Route path="/" >
          <Header />
            <Home />
          </Route>

        </Switch>



      </div>
    </Router>

  );
}

export default App;
