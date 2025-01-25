export const fetchMovieData = async () => {
  const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${
    import.meta.env.VITE_API_KEY
  }=titanic&page=1`;
  console.log(import.meta.env.VITE_API_KEY);

  try {
    const res = await fetch(API);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
