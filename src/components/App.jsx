import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./../pages/Home";
import TweetsPage from "../pages/TweetsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
