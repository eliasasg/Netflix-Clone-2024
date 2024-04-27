import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
}
  
)
export default instance


// https://api.themoviedb.org/3/discover/tv?api_key=61ad58fb0dee4daeab7141b6af54819b&with_networks=213