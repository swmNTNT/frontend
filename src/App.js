import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Router>
      <CssBaseline />
      <div
        style={{ backgroundColor: "#FCFBF7", width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />

            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
