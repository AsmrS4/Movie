import axios from 'axios';
import {Navigate} from 'react-router-dom'

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/account/login`, data);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.error(error);
    }
}


export const logoutUser = async () => {
    let token = localStorage.getItem('token')
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/account/logout`, token);
        if(response.status !== 500) {
            localStorage.clear();
            window.location.href = '/login';
        }

    } catch (error) {
        console.error(error);
    }
}


export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/account/register`, data);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}