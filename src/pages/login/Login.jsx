import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../../api";
import { toast } from "react-toastify";
import ssss from "../../assets/images/sssss.png";

function Login() {
  const [username, setUsername] = useState("yraigatt3");
  const [password, setPassword] = useState("sRQxjPfdS");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log("res>>>", res.data.token);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="form__login">
      <div className="container">
        <div className="nimadir">
          <img className="imagess" src={ssss} alt="" />
          <form onSubmit={handleLogin} className="login">
            <label htmlFor="">
              <p className="login__text">Email Address*</p>
              <input
                className="login__inp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </label>
            <input
              className="login__inp"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <label className="label__checkbox" htmlFor="">
              <input className="checkbox" type="checkbox" required />
              <p>Remember Me</p>
            </label>
            <button className="login__btn" disabled={loading} type="submit">
              {loading ? "Loading..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
