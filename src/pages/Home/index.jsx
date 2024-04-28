import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { pagesName } from "../../Router";
import "./index.scss";

function Home() {
  const navigate = useNavigate();

  function getActiveLinkClass({ isActive }) {
    return isActive ? "active" : "";
  }

  useEffect(() => {
    navigate(pagesName.assignment1);
  }, [navigate]);

  return (
    <>
      <nav className="assignment-nav">
        <NavLink className={getActiveLinkClass} to={pagesName.assignment1}>
          Assignment 1
        </NavLink>
        <NavLink className={getActiveLinkClass} to={pagesName.assignment2}>
          Assignment 2
        </NavLink>
        <NavLink className={getActiveLinkClass} to={pagesName.assignment3}>
          Assignment 3
        </NavLink>
      </nav>
      <div className="assignment-container">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
