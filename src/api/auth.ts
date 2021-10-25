import axios, { AxiosResponse } from 'axios';

class AuthApi {
    private httpRequest = axios.create({
        baseURL: 'https://test.jinhyeokfang.xyz/auth' 
    });

    login (email: string, password: string): Promise<AxiosResponse> {
        return this.httpRequest.post('/login', { email, password });
    }
}

export default new AuthApi();