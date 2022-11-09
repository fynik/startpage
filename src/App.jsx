import { useEffect, useState } from "react"
import Greeting from "./components/Greeting"
import TabsList from "./components/TabsList"
import OptionsService from "./services/OptionsService"
import "./App.css"

const App = () => {

  const [options, setOptions] = useState({ user: "", tabItemAllowedLength: 15, tabs: []});

  useEffect( () => {
    OptionsService
      .getOptions()
      .then(opt => setOptions(opt))
      .catch(err => console.log(err));
  },[]);

  console.log(options);

  return (
    <div className="page">
      <Greeting name={options.user} />
      <TabsList tabs={options.tabs} nameLength={options.tabItemAllowedLength} />
    </div>
  );
}

export default App;
