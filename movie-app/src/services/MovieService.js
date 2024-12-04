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