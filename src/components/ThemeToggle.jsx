const ThemeToggle = ({ onThemeSwitch, currentTheme }) => {
  if (currentTheme === "light") {
    return <span 
      className="material-symbols-outlined theme-icon"
      onClick={onThemeSwitch}>
        dark_mode
    </span>
  } else {
    return <span 
      className="material-symbols-outlined theme-icon"
      onClick={onThemeSwitch}>
        light_mode
    </span>
  }
}

export default ThemeToggle;