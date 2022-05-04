import axios from 'axios';

const LOGIN_BASE_REST_API_URL ='http://localhost:9195/api/v1/login';
class LoginService{
    Validate(User){
        return axios.get(LOGIN_BASE_REST_API_URL+'/user/'+User)
    }
    Create(login){
        return axios.post(LOGIN_BASE_REST_API_URL,login)
    }
    Update(login){
        return axios.put(LOGIN_BASE_REST_API_URL,login)
    }
}
export default new LoginService();