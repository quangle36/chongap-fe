import Api from './api';

export default class UserService {
    static async login(email: string, password: string) {
        const response = await Api.post('auth/login', { email, password });
        console.log(response);
        return response.data;
    }
}