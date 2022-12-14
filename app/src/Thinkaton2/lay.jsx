import { Outlet, Link } from "react-router-dom";

const Lay = () => {
  <div className="nav">
    <ul>
      <li>
        <Link to="/Candidates">CANDIDATES</Link>
      </li>
    </ul>
    <Outlet />
  </div>;
};
export default Lay;
