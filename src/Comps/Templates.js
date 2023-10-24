import React from "react";
import Loginform from "./Loginform";
import Signupform from "./Signupfrom";

const Templates = ({ title, desc1, desc2, fromtype, setLogged }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {fromtype === "signup" ? <Signupform /> : <Loginform />}
        <div>
          <div></div>
          <p>or</p>
          <div></div>
          <button>
            <p>
              {" "}
              <img src="Google__G__Logo.svg" alt="" /> Signup with google
            </p>
          </button>
        </div>
      </div>

      {/* Images THodi bohot */}
      <div>
        <img
          src="https://i.postimg.cc/SN58Rmmq/Forgot-password-cuate.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Templates;
