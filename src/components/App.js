import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Router forceRefresh={true}>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="router-content">
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/streams/create">
            <StreamCreate />
          </Route>
          <Route path="/streams/edit/:id">
            <StreamEdit />
          </Route>
          <Route path="/streams/delete/:id">
            <StreamDelete />
          </Route>
          <Route path="/streams/show">
            <StreamShow />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
