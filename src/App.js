import "./App.css";
import {ThemeProvider} from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// utils
import { lightTheme, darkTheme } from "./utils/themes"
import { GlobalStyles } from "./utils/globalStyles";
import { useDarkMode } from './utils/useDarkMode';
// components
import Layout from "./components/Layout";
// pages
import Main from "./pages/Main";
import Details from "./pages/Details";


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout children={<Main />} toggleTheme={toggleTheme} />} />
          <Route path="detail/:name" element={<Layout children={<Details />} toggleTheme={toggleTheme}/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
