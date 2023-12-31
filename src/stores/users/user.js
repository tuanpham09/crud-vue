import axios from './axios';
const API_URL = "http://localhost:3000/user";
class AuthService {
    login(user) {
        return axios
            .post(API_URL, {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register() {
        return axios.post(API_URL, {
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
}

export default AuthService;