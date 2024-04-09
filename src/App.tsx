/**
 * @TODO Needs to remove ANY
 * @NOtE - Please Check Readme.md 
 */


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./router";
import { NAVBAR } from "./components";
function App() {
  return (
    <>
      <Router>
        <NAVBAR />
        <Routes>
          {router.routes.map((route, index) => (
            <Route key={index + 'Router'} path={route.path} element={(route as any).element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
