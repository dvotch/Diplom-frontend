import { useState, ChangeEvent, FormEvent, useContext } from "react";
import shecterin from "../../shared/assets/Прямоугольник 2.png";

import { jwtDecode } from "Jwt-decode";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../../app/context";

const AuthForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { role, setRole } = useContext(RoleContext);

  const handleLogin = () => {
    if (role[0] === "STUDENT") {
      navigate("/student");
    } else {
      navigate("/");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://prod.dvotch.ru:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())

      .then((response) => {
        const token = response;
        if (token.accessToken) {
          const decoded = jwtDecode<JwtPayload>(token.accessToken);
          setRole(decoded.roles);
        }
      })
      .then(() => {
        handleLogin();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  interface JwtPayload {
    id: string;
    email: string;
    roles: string[];
    organizationId: string;
  }
  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="">
        <img src={shecterin} alt="" className="size-96 " />
      </div>
      <div className="bg-sky-600 size-96 flex flex-col  gap-4 ">
        <div className="text-white text-3xl font-medium mt-16 ml-20">
          Авторизация
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 items-center"
        >
          <div className="border-b-2 border-neutral-100 w-72">
            <input
              className="placeholder-white placeholder-opacity-80 ml-4 text-white"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Логин"
            />
          </div>
          <div className="border-b-2 border-neutral-100 w-72">
            <input
              className="placeholder-white placeholder-opacity-80 ml-4 text-white"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-sky-600 size-4/5 font-medium"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
