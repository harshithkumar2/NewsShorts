import React from "react";
import "./Theme.css";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";

function Theme() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  return (
    <div>
      {darkMode ? (
        <CgSun
          strokeWidth={1}
          size={20}
          onClick={() => setDarkMode(!darkMode)}
        />
      ) : (
        <HiMoon
          strokeWidth={1}
          size={20}
          onClick={() => setDarkMode(!darkMode)}
        />
      )}
    </div>
  );
}

export default Theme;
