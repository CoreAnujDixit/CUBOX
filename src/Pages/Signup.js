import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Signup = ({ setLogged }) => {
    const [FormData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });


    const [showPassword, setshowPassword] = useState(false);

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };
    const navigate = useNavigate();

    function submit(event) {
        event.preventDefault();
        setLogged(true);
        toast.success("Logged in")
        navigate("/dashboard")

    }

    return (
        <div>
            {/* Student Instructor */}
            <div>
                <button>Students</button>
                <button>Instructor</button>
            </div>
            <form action="" onClick={submit}>
                {/* div for first name & last name */}
                <div>
                    <label htmlFor="firstname">
                        <p>First Name <sup>*</sup></p>
                        <input
                            type="text"
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={FormData.firstname}
                        />
                    </label>

                    <label htmlFor="lastname">
                        <p>Last Name <sup>*</sup></p>
                        <input
                            type="text"
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={FormData.lastname}
                        />
                    </label>
                </div>

                {/* email */}
                <label htmlFor="email">
                    <p>Email<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        placeholder='Email'
                        value={FormData.email}
                    />
                </label>

                {/* create & confirm password */}
                <div>
                    <label htmlFor="password">
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Password'
                            value={FormData.password}
                        />
                        <span onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? <AiFillUnlock /> : <AiFillLock />}
                        </span>
                    </label>

                    <label htmlFor="confirmpassword">
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='confirmpassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={FormData.confirmpassword}
                        />
                    </label>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    );
}

export default Signup;
