import axios from "axios";

axios
  .get(
    "https://api.themoviedb.org/3/movie/550?api_key=b3ae42d2f588e9a4c24f358e7de432f1"
  )
  .then((res) => res.data)
  .catch((error) => console.error(error));

export default api;
