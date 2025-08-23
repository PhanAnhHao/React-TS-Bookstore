import axios from "services/axios.customize";

export const loginApi = async (username: string, password: string) => {
    const urlBackend = "/api/v1/auth/login";
    return axios.post<IBackendRes<ILogin>>(urlBackend, { username, password }, {
        headers: {
            delay: 3000
        }
    }); // ko cần import IBackendRes và ILogin vì đã declare global
}

export const registerApi = async (email: string, fullName: string, password: string, phone: string) => {
    const urlBackend = "/api/v1/user/register";
    return axios.post<IBackendRes<IRegister>>(urlBackend, { email, fullName, password, phone });
}

export const fetchAccountApi = async () => {
    const urlBackend = "/api/v1/auth/account";
    return axios.get<IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 3000
        }
    });
}