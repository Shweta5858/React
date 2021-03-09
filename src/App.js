import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/layout/HeaderComponent';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddCaloriesLog from './components/calorieslog/AddCaloriesLog';
import {Provider} from 'react-redux';
import store from './store';
import UpdateCaloriesLog from './components/calorieslog/UpdateCaloriesLog';
import Landing from './components/Landing';


function App() {
  
  return (
    
  <Provider store={store}>  
    <Router>
      <div>
        <HeaderComponent/>        
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/addCaloriesLog" component={AddCaloriesLog}/>
        <Route path="/updateCaloriesLog/:id" component={UpdateCaloriesLog}/>
        <Route path="/" exact component={Landing}/>
      </div>
    </Router>
  </Provider>  
  );
}

export default App;
