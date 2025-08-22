import axios from "services/axios.customize";

export const loginApi = async (username: string, password: string) => {
    const urlBackend = "/api/v1/auth/login";
    return axios.post<IBackendRes<ILogin>>(urlBackend, { username, password }); // ko cần import IBackendRes và ILogin vì đã declare global
}