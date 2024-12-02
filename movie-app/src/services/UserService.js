import axios from "axios";
import { logoutUser } from "./Auth";

export const getUserProfile = async () => {
    let token = localStorage.getItem('token');

    try {
        const response = await fetch(`${process.env.REACT_APP_API}/account/profile`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            }
        })

        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 401) {
                logoutUser();
            }
        }
    } catch (error) {
        console.error(error)
    }
}

export const editUserProfile = async (data) => {
    let token = localStorage.getItem('token');
    console.log(data)
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/account/profile`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            },
            body: JSON.stringify({
                ...data
            })
        })
        if (response.ok) {
            return response.json;
        } else {
            if (response.status === 401) {
                logoutUser()
            }
        }
    } catch (error) {
        console.error(error)
    }
}