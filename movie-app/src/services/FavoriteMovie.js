import axios from "axios";

export const fetchFavorites = async () => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/favorites`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        if (response.ok) { return response.json(); }
    } catch (error) {
        console.error(error)
    }
}

export const addToFavorite = async (id) => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/favorites/${id}/add`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                id: id
            })
        })
        return response;
    } catch (error) {
        console.error(error)
    }
}

export const removeFromFavorites = async (id) => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/favorites/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                id: id
            })
        })
        if (response.ok) {
            return true
        }
    } catch (error) {
        console.log(error)
    }
} 