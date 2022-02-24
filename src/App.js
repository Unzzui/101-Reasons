import { useContext } from "react";
import Intro from "./components/Intro/Intro";
import ReasonsList from "./components/ReasonsList/ReasonsList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";



function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? '#222' : 'white', color: darkMode && 'white'}}>
    <Toggle />
    <Intro />
    <ReasonsList />
    </div>
    );
}

export default App;
