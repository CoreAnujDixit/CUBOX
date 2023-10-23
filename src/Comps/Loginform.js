import React from "react";

const Loginform = () => {
    
  const [fromdata, setfromdata] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false)
  const changeHandler = (event) =>{
        setfromdata((prevData) => (
            {
                 ...prevData,
                 [event.target.name] : event.target.value
            }
        ))
  }
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <p>
            Email <sup>*</sup>
          </p>
          <input type="text" required value={formdata.email} onClick={changeHandler} placeholder="Email ID"/>
        </label>

        <label htmlFor="">
          <p>
            Password <sup>*</sup>
          </p>
          <input type={showPassword? ("text") : ("password") } required value={formdata.password} onClick={changeHandler} placeholder="Password"/>
          <span></span>
        </label>
      </form>
    </div>
  );
};

export default Loginform;
