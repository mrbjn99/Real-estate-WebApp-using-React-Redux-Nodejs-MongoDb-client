import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Header/index.js";
import Home from "../components/Home/Home.js";
import PostList from "../components/PostList";
import YoutubeEmbed from "../components/Youtube/YoutubeEmbed.js";
import About from "../components/About/About.js";
import TableauMap from "../components/Chart/TableauMap.js";
import TableauBar from "../components/Chart/TableauBar.js";
import TableauChart from "../components/Chart/TableauChart.js";

export default function HomePage() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <YoutubeEmbed embedId="yzRSsp1pyVo" />
            </Route>
            <Route path="/PostList">
              <PostList />
            </Route>
            <Route path="/ChartMap">
              <TableauMap />
            </Route>
            <Route path="/ChartBar">
              <TableauBar />
            </Route>
            <Route path="/ChartTreeMap">
              <TableauChart />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
