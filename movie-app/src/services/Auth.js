import axios from 'axios';

export const loginUser = async (data) => {
    try {
        const response = await axios.post('https://react-midterm.kreosoft.space/api/account/login', data);
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
        const response = await axios.post('https://react-midterm.kreosoft.space/api/account/logout', token);
        if (response.status === 200) {
            return response
        }
    } catch (error) {
        console.error(error);
    }
}


export const registerUser = async (data) => {
    try {
        const response = await axios.post('https://react-midterm.kreosoft.space/api/account/register', data);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.error(error)
    }
}