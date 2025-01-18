import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.js";
import axios from "axios";

function LoginPopup() {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!data.email) formErrors.email = "Adres e-mail jest wymagany";
    if (!data.password) formErrors.password = "Hasło jest wymagane";

    if (data.email && !emailRegex.test(data.email)) {
      formErrors.email = "Proszę wprowadzić poprawny adres e-mail";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    let newUrl = `${url}/api/user/login`;

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        setErrors((prevState) => ({
          ...prevState,
          general: response.data.message || "Wystąpił błąd, spróbuj ponownie",
        }));
      }
    } catch (error) {
      setErrors((prevState) => ({
        ...prevState,
        general: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
      }));
    }
  };

  return (
    <div className="form-container">
      <div className="close-icon">
        <Link to={"/"}>
          <img src={assets.cross_icon} alt="close" />
        </Link>
      </div>
      <div>
        <Link to={"/registration"}>
          <button className="login-registration-btn">ZAŁÓŻ KONTO</button>
        </Link>
      </div>
      <form onSubmit={onLogin} className="login-popup-container">
        <img className="top-form-img" src={assets.header_img} />
        <div className="login-form">
          <h1>Logowanie</h1>
          <div className="login-inputs">
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="E-mail"
              className="input-field"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Hasło"
              className="input-field"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <button type="submit" className="submit-btn">
            ZALOGUJ SIĘ
          </button>
        </div>
        {errors.general && <p className="error-text">{errors.general}</p>}
        <div className="line"></div>
        <div className="agreement-text">
          <p>
            Rejestrując się na [NAZWA APLIKACJI], akceptujesz nasze{" "}
            <span>
              <Link to={"/terms"}>warunki świadczenia usług</Link>
            </span>{" "}
            i{" "}
            <span>
              <Link to={"/privacy-policy"}>politykę prywatności</Link>
            </span>
          </p>
        </div>
        <img className="bottom-form-img" src={assets.header_img} />
      </form>
    </div>
  );
}

export default LoginPopup;
