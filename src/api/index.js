import axios from "axios";

export const apiURL = "http://localhost:4000/api";

export const getAxios = async (methodName, headers = "") => {
    return await axios.get(`${apiURL}${methodName}`, { headers: headers });
};

export const postAxios = async (methodName, data,headers="", authorization = true) => {
    return await axios.post(`${apiURL}${methodName}`, data, { headers: headers });
};

export const putAxios = async (methodName, data, headers="", authorization = true) => {
    return await axios.put(`${apiURL}${methodName}`, data, { headers: headers });
};
