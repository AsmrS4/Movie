import axios from "axios";

export const getMovies = async (page) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/movies/${page}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export const fetchMovieInfo = async (id) => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/movies/details/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': 'Bearer' + token
            }
        })

        if (response.ok) {
            return response.json();
        }

    } catch (error) {
        console.error(error);
    }
}