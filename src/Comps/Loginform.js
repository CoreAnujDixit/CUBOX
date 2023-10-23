import React from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

const Loginform = () => {
  const [fromdata, setfromdata] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false);
  const changeHandler = (event) => {
    setfromdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <p>
            Email <sup>*</sup>
          </p>
          <input
            type="email"
            required
            value={formdata.email}
            onClick={changeHandler}
            placeholder="Email ID"
            name="email"
          />
        </label>

        <label htmlFor="">
          <p>
            Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={formdata.password}
            onClick={changeHandler}
            placeholder="Password"
            name="password"
          />
          <span onClick={() => setshowPassword((prev) => !prev)}>
            {showPassword ? <AiFillUnlock /> : <AiFillLock />}
          </span>
          <p>Forget Password</p>
        </label>
        <button>SignIn</button>
      </form>
    </div>
  );
};

export default Loginform;
