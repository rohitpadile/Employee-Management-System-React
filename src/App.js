
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import EmployeeFormComponent from './components/EmployeeFormComponent';
//Switch(Routes in v6) from react-router-dom ensures that only one component renders at the same time
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <HeaderComponent />
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<EmployeeFormComponent />} />
            <Route path="/add-employee" element={<EmployeeFormComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
