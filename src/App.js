import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resturents from './components/Resturents/Resturents';
import NotFound from './Notfound/NotFound';

function App() {
  return (
   <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/resturents">
           <Resturents></Resturents>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
         

       </Switch>
     </Router>
   </div>
  );
}

export default App;


