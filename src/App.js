import "./App.css";

import { Input } from "./Input/Index";
import { CardList } from "./CardList/Index";
import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [citiesList, setCitiesList] = useCitiesList();
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
