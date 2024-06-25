import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}
//exporting object of this class which can be used inside a component
export default new EmployeeService() 