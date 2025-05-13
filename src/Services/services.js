import axios from "axios";


const apiPorta = "5063";

//apilocal ela recebe o endereço da api
const apilocal = ` http://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apilocal
});

export default api;