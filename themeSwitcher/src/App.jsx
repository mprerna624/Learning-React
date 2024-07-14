import { useEffect, useState } from "react";
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn";
import { ThemeContextProvider } from "./context/themeContext";


function App() {

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect( () => {
    const htmlEle = document.querySelector('html');
    htmlEle.classList.remove("light","dark");
    htmlEle.classList.add(themeMode);
  } , [themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
        </div>
    </ThemeContextProvider>
  )
}

export default App
