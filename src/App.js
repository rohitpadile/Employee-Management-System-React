
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import EmployeeFormComponent from './components/EmployeeFormComponent';
//Switch(Routes in v6) from react-router-dom ensures that only one component renders at the same time
function App() { //functional component
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Routes>  
                  <Route path='/' exact element={<ListEmployeeComponent/>}/>{/* http://localhost:3000 */}
                  <Route path='/employees' element={<ListEmployeeComponent/>}/>{/* http://localhost:3000/employees  */}
                  <Route path='/update-employee/:id' element={<EmployeeFormComponent />} />{/* http://localhost:3000/add-employee  */}
                  <Route path='/add-employee' element={<EmployeeFormComponent />} />{/* http://localhost:3000/update-employee/1  */}
            </Routes>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
