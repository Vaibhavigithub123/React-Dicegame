import React, { useState, useEffect } from "react";
import "./Login.css";
import loginimg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [error, setErrorValues] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [data, setData] = useState([]);

  const getData = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const ValidateForm = (val) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(val.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!val.password) {
      errors.password = "password is required!";
    } else if (val.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    }

    return errors;
  };

  const submitData = (e) => {
    e.preventDefault();
    // console.log(inputValues)
    setErrorValues(ValidateForm(inputValues));
    setisSubmit(true);

    //login
    const getUserArray = localStorage.getItem("User");
    // console.log(getUserArray);

    if (getUserArray && getUserArray.length) {
      const userData = JSON.parse(getUserArray);
      // console.log(userData);

      const userLogin = userData.filter((ele, index) => {
        return (
          ele.email === inputValues.email &&
          ele.password === inputValues.password
        );
      });
      // console.log(userLogin)

      if (userLogin.length === 0) {
        toast.error("Invalid Details");
      } else {
        setTimeout(() => {
          localStorage.setItem("User_login", JSON.stringify(userLogin));
          Navigate("/dashboard");
        }, 2000);
        toast.success("User logged in succesfully");
      }
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      // console.log("Form submitted succesfully");

      setInputValues({
        email: "",
        password: "",
      });
    }
  }, [error, isSubmit]);

  return (
    <main>
      <Toaster richColors position="top-center" />
      <div className="right-Signupform">
        <form>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputValues.email}
            onChange={getData}
          />
          <p style={{ color: "red" }}>{error.email}</p>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputValues.password}
            onChange={getData}
          />
          <p style={{ color: "red" }}>{error.password}</p>
          <br />
        </form>
        <button className="signupbtn" onClick={submitData}>
          Login
        </button>
        <br />
        <p>
          Don't Have an Account <Link to="/">SignUp</Link>
        </p>
      </div>

      <div className="left-img">
        <img src={loginimg} />
      </div>
    </main>
  );
}

export default Login;
