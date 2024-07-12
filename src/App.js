import "./App.css";
import "./index.css";
import "./reset.css";

import { Create, Join, MainPage } from "./views";
import { Footer, Navbar } from "./components";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(1);
  const components = {
    1: <MainPage />,
    2: <Join />,
    3: <Create />,
  };

  return (
    <div>
      <Navbar />
      {components[active]}

      <Footer setActive={setActive} selected={active}></Footer>
    </div>
  );
}

export default App;
