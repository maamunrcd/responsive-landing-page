import React, {useState, useEffect} from "react";
import Contact from "../Contact";
import Home from "../Home";
import Work from "../Work";
import "./App.scss";
import About from "../About";

function App() {
  const [displayComponent, setDisplayComponent] = useState('contact');
  const changeContentView = (componentName) => {
    setDisplayComponent(componentName);
  };
  useEffect(() => {
    console.log(displayComponent, 'hello displayi')
  }, [displayComponent]);
  return (
    <div className="App">
      <div className="wrapper">
        {displayComponent === 'work' ? (
          <Work handleAction={changeContentView}/>
        ) : displayComponent === 'about' ? (
          <About handleAction={changeContentView}/>
        ):displayComponent === 'contact' ? (
        <Contact handleAction={changeContentView}/>) : (
          <Home handleAction={changeContentView}/>
        )}
      </div>
    </div>
  );
}

export default App;
