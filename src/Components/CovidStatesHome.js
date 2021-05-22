import React from "react";
const Navbars = React.lazy(() => import("./Navbars"));
const CovidStates = React.lazy(() => import("./CovidStates"));

function CovidStatesHome() {
  return (
    <div>
      <Navbars />
      <CovidStates />
    </div>
  );
}

export default CovidStatesHome;
