import React, { useState } from "react";
import { PersonalDashborad } from "./components/PersonalDashborad";

function App() {
  const [data, setData] = useState("");
  const handleChange = (d) => {
    setData(d);
  };
  return (
    <React.Fragment>
      <PersonalDashborad />
    </React.Fragment>
  );
}

export default App;
