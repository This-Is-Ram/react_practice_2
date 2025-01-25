import { NavLink, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Oray savata URL Check Chesko ra </h1>
      {/* <NavLink to="/">go to home</NavLink> */}
      <button onClick={() => navigate(-1)}>Go Back</button>
      {/* <button onClick={() => navigate("/")}>Go Back</button>
      <button onClick={() => navigate("/about")}>Go Back</button> */}
    </>
  );
};
