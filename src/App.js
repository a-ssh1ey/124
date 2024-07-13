import "./App.css";
import "./index.css";
import "./reset.css";

import { Create, Join, MainPage, Pending } from "./views";
import { Footer, Navbar } from "./components";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(0);
  const components = {
    0: <MainPage setActive={setActive} selected={active}/>,
    1: <Join setActive={setActive} selected={active}/>,
    2: <Create setActive={setActive} selected={active}/>,
    3: <Pending setActive={setActive} selected={active}/>,
  };

  return (
    <div>
      <Navbar />

      {components[active]}
    </div>
  );
}

export default App;
