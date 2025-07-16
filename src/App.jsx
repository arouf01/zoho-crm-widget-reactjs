import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
