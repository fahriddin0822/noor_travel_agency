import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DestinationDetails } from "./pages/detail/DestinationDetails";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

const App = () => {
  const [language, setLanguage] = useState("en");
  const translate = (text) =>
    typeof text === "object" ? text[language] : text;

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden relative">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Routes>
          <Route path="/" element={<Home translate={translate} />} />
          <Route
            path="/destination/:place"
            element={
              <DestinationDetails language={language} translate={translate} />
            }
          />
        </Routes>
      </main>
      <Footer language={language}/>
    </div>
  );
};

export default App;
