import "./App.css";
import "./Components/spinner.css";
import React, { Suspense } from "react";
// import Navbars from "./Components/Navbars";
// import Home from "./Components/Home";
// import Covid from "./Components/Covid";

const Navbars = React.lazy(() => import("./Components/Navbars"));
const Home = React.lazy(() => import("./Components/Home"));
const Covid = React.lazy(() => import("./Components/Covid"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="container">
            <div className="circle circle-red"></div>
            <div className="circle circle-blue"></div>
            <div className="circle circle-green"></div>
          </div>
        }
      >
        <Navbars />
        <Covid />
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
