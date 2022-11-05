import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserInfo from "./Components/UserInfo/UserInfo";
import RatingChange from "./Components/Contests/RatingChange";
import Submissions from "./Components/Submissions/Submissions";
import UserBlog from "./Components/Blog/UserBlog";
import Home from "./Components/Home/Home";
import Problems from "./Components/Problems/Problems";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/Codeforces-Visualizer/user/:username"
          element={<UserInfo />}
        />
        <Route
          exact
          path="/Codeforces-Visualizer/rating"
          element={<RatingChange />}
        />
        <Route
          exact
          path="/Codeforces-Visualizer/submissions"
          element={<Submissions />}
        />
        <Route
          exact
          path="/Codeforces-Visualizer/problems"
          element={<Problems />}
        />
        <Route
          exact
          path="/Codeforces-Visualizer/blogs"
          element={<UserBlog />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
