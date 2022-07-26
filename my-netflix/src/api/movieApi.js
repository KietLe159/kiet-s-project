import axiosClient from "./axiosClient";

const movieApi={
    
    getMovieById(id){
        const movie= axiosClient.get(`/movies/find/${id}`)
        return movie;
    },
    getMovieRandom(params){
        const movie= axiosClient.get(`/movies/random`, {params})
        return movie;
    }
}
export default movieApi;