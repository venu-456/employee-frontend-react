import './App.css';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import ResetPassword from './components/ResetPassword';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import Login from './components/Login';
import AddLoginComponent from './components/AddLoginComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route exact path="/" element ={<Login/>} ></Route>
            <Route path="/add-Login" element ={<AddLoginComponent/>}></Route>
            <Route path="/employees" element ={<ListEmployeeComponent/>} ></Route>
            <Route path="/add-employee" element ={<AddEmployeeComponent/>}></Route>
            <Route path="/edit-employee/:id" element ={<AddEmployeeComponent/>}></Route>
            <Route path="/reset-password" element ={<ResetPassword/>} ></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
      
    </div>
  );
}

export default App;
