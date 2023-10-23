import { toast } from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  let Logged = props.Logged;
  let setLogged = props.setLogged;
  return (
    <div className="flex  space-x-30 justify-evenly">
      <Link to="/">
        <img
          src="https://i.postimg.cc/25vgRH2Y/image.png"
          width={160}
          loading="lazy"
          alt=""
        />
      </Link>
      <nav>
        <ul className=" flex gap-3 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      {/* Buttons ka Kaam */}
      <div className="flex ml-3 gap-2">
        {!Logged && (
          <Link to="/login">
            <button
              onClick={() => {
                setLogged(false);
                toast.success("Logged In");
              }}
            >
              Login
            </button>
          </Link>
        )}
        {!Logged && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}
        {Logged && (
          <Link to="/">
            <button
              onClick={() => {
                setLogged(false);
                toast.success("Logged In");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {Logged && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
