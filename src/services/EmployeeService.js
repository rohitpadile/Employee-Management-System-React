import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_CREATE_EMPLOYEE_URL = "http://localhost:8080/api/v1/add-employee";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_CREATE_EMPLOYEE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}
//exporting object of this class which can be used inside a component
export default new EmployeeService() 
