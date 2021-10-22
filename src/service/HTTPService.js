import Axios from "axios";

const BASE_URL =  "http://localhost:8080/emp-service";
const GET_EMPLOYEE = "/get";
class HttpService {
    getEmployeeList = () => {
        return Axios.get(BASE_URL + GET_EMPLOYEE);
    }
}
export default new HttpService();