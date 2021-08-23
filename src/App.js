import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resources from "./components/Resources";
import Resource from "./components/Resource";
import { Redirect } from "react-router";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resource/:id" component={Resource} />
          <Redirect from="*" to={"/resources"} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
