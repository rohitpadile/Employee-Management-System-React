
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


//Switch(Routes in v6) from react-router-dom ensures that only one component renders at the same time
function App() { //functional component
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Routes>  
              {/* http://localhost:3000/employees */}
                  <Route path='/' element={<ListEmployeeComponent/>}/>
                  <Route path='/employees' element={<ListEmployeeComponent/>}/>
            </Routes>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
