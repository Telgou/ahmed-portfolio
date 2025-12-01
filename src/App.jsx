import React from "react";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile language={language} />
        </Grid>

        <Grid xs>
          <Router>
            <ScrollToTop>
              <Header setLanguage={setLanguage} language={language} />
              <div className={"main_content container_shadow"}>
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio language={language} />
                  </Route>
                  <Route path="/">
                    <Resume language={language} />
                  </Route>
                </Switch>
              </div>
            </ScrollToTop>
          </Router>

          <Footer language={language} />
        </Grid>
      </Grid>

    </Container>
  );
}

export default App;
