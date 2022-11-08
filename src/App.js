import config from "./config.js"
import Greeting from "./components/Greeting";
import TabsList from "./components/TabsList"

const App = () => {
  const { user, tabItemAllowedLength, tabs } = config;

  return (
    <div>
      <Greeting name={user} />
      <TabsList tabs={tabs} nameLength={tabItemAllowedLength} />
    </div>
  );
}

export default App;
