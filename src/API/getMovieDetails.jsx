export const fetchMovieDetails = async ({ params }) => {
  const id = params.movieID;
  const API = `http://www.omdbapi.com/?i=${id}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  //   console.log(import.meta.env.VITE_API_KEY);

  try {
    const res = await fetch(API);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
