import axios from "axios";

export const loginOperation = async(data) =>{
    try {
        const response = await axios.post("http://localhost:8000/api/auth/login", data);
        const datas = response.data;

        return datas;
    } catch (error) {
        console.log(error);
    }
};

export const logoutOperation = async() =>{
    try {
        const response = await axios.get("http://localhost:8000/api/auth/logout");
        const data = response.data;

        return data;
    } catch (error) {
        console.log(error);
    }
};



