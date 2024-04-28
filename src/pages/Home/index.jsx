import { Link, Outlet } from "react-router-dom";
import { pagesName } from "../../Router";
import "./index.scss";

function Home() {
  return (
    <>
      <nav className="assignment-nav">
        <Link to={pagesName.assignment1}>Assignment 1</Link>
        <Link to={pagesName.assignment2}>Assignment 2</Link>
        <Link to={pagesName.assignment3}>Assignment 3</Link>
      </nav>
      <div className="assignment-container">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
