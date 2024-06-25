
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

//Switch(Routes in v6) from react-router-dom ensures that only one component renders at the same time
function App() { //functional component
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Routes>  
              {/* http://localhost:3000/employees  */}{/* http://localhost:3000/add-employee  */}
                  <Route path='/' exact element={<ListEmployeeComponent/>}/>
                  <Route path='/employees' element={<ListEmployeeComponent/>}/>
                  <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
            </Routes>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
