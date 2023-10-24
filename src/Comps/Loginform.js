import React, { useState } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const Loginform = ({ setLogged }) => {
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    setLogged(true);
    toast.success("Logged in")
    navigate("/dashboard")

  }
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="item-center ml-24">
      <form action="" onSubmit={submitHandler} >
        <label htmlFor="email">
          <p>
            Email <sup>*</sup>
          </p>
          <input
            type="email"
            required
            value={formdata.email}
            onChange={changeHandler}
            placeholder="Email ID"
            name="email"
          />
        </label>

        <label htmlFor="password">
          <p>
            Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={formdata.password}
            onChange={changeHandler}
            placeholder="Password"
            name="password"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
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
