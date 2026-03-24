import axios from "axios";
import { getBackendUrl } from "../config";

const api = axios.create({
	baseURL: getBackendUrl() ?? 'https://api-service.multiagendamento.com',
	withCredentials: true,
});

export default api;
