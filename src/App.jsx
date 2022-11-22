import { useEffect, useState } from "react"
import Greeting from "./components/Greeting"
import TabsList from "./components/TabsList"
import OptionsService from "./services/OptionsService"
import "./App.css"
import useLocalStorage from "use-local-storage";
import ThemeToggle from "./components/ThemeToggle"

const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [options, setOptions] = useState({ user: "", tabItemAllowedLength: 15, tabs: []});
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  useEffect( () => {
    OptionsService
      .getOptions()
      .then(opt => setOptions(opt))
      .catch(err => console.log(err));
  },[]);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }


  return (
    <>
    <div className="theme-switcher" data-color-scheme={theme}>
      <ThemeToggle onThemeSwitch={switchTheme} currentTheme={theme}/>
    </div>
    <div className="page" data-color-scheme={theme}>
      <Greeting name={options.user} />
      <TabsList tabs={options.tabs} nameLength={options.tabItemAllowedLength} />
    </div>
    </>
  );
}

export default App;
