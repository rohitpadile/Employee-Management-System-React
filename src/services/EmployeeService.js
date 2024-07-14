import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://employeelb-72894870.ap-south-1.elb.amazonaws.com/api/v1",
  headers: {
    'Content-Type': 'application/json',
  }
});

class EmployeeService {

  getEmployees() {
    return axiosInstance.get('/employees');
  }

  createEmployee(employee) {
    return axiosInstance.post('/add-employee', employee);
  }

  getEmployeeById(employeeId) {
    return axiosInstance.get(`/employees/${employeeId}`);
  }

  updateEmployee(employeeId, employee) {
    return axiosInstance.put(`/employees/${employeeId}`, employee);
  }

  deleteEmployee(employeeId) {
    return axiosInstance.delete(`/employees/${employeeId}`);
  }
}

// exporting object of this class which can be used inside a component
const employeeService = new EmployeeService()
export default employeeService;
