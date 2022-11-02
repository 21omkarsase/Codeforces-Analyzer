import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserInfo from "./Components/UserInfo/UserInfo";
import RatingChange from "./Components/Contests/RatingChange";
import Submissions from "./Components/Submissions/Submissions";
import UserBlog from "./Components/Blog/UserBlog";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<UserInfo />} />
        <Route exact path="/rating" element={<RatingChange />} />
        <Route exact path="/submissions" element={<Submissions />} />
        <Route exact path="/blogs" element={<UserBlog />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
