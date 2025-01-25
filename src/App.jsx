import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Movie } from "./pages/MoviePage";
import { AppLayout } from "./components/layout/appLayout";
import "/src/App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { fetchMovieData } from "./API/GettingMoviesData";
import { MovieDetails } from "./components/ui/MovieDetails";
import { fetchMovieDetails } from "./API/getMovieDetails";
import { Contact, getFormData } from "./pages/ContactPage";

// ? old model

// export const App = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       // this is Helper function
//       <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="movie" element={<Movie />} />
//       </Route>
//     )
//   );
//   return <RouterProvider router={router} />;
// };

// ? new model
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: fetchMovieData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: fetchMovieDetails,
        },
        {
          path: "/Contact",
          element: <Contact />,
          action: getFormData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
