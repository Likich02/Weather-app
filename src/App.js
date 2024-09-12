import { useState } from "react";
import "./App.css";

import { Input } from "./Input/Index";
import { CardList } from "./CardList/Index";

function App() {
  const [citiesList, setCitiesList] = useState([]);

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
