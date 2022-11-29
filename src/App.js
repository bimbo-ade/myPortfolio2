import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import AnimatedRoutes from "./AnimatedRoutes";
function App() {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <div className="navlinks">
          <NavLink to="/" className="link">
            {" "}
            <AiOutlineHome />
          </NavLink>
          <NavLink to="/about" className="link">
            <AiOutlineUser />
          </NavLink>
          <NavLink to="/projects" className="link">
            <AiOutlineProject />
          </NavLink>
          <NavLink to="/contact" className="link">
            <AiOutlineMessage />
          </NavLink>
          {theme === "dark-theme" ? (
            <BsSun onClick={toggleTheme} />
          ) : (
            <BiMoon onClick={toggleTheme} />
          )}
        </div>

        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
