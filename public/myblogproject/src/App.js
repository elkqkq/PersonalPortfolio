import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogForm from './components/BlogForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogDetails from './components/BlogDetails';



function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <div className='content'>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/BlogForm" >
          <BlogForm/>
        </Route>
        <Route path="/Blog-details/:id">
          <BlogDetails/>
        </Route>
       
     </Switch>
     </div>
    </div>
    </Router>

  );
}

export default App;
