import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Header/index.js";
import Home from "../components/Home/Home.js";
import PostList from "../components/PostList";
import YoutubeEmbed from "../components/Youtube/YoutubeEmbed.js";
import About from "../components/About/About.js";


export default function HomePage() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
              <YoutubeEmbed embedId="yzRSsp1pyVo" />
              <About />
            </Route>
            <Route path="/PostList">
              <PostList />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
