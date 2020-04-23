import React from "react";
import { Route, Link } from "react-router-dom";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
} from "./screens";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/secondpage">SecondPage</Link>
          </li>
          <li>
            <Link to="/thirdpage">thirdPage</Link>
          </li>
          <li>
            <Link to="/fourthpage">FourthPage</Link>
          </li>
          <li>
            <Link to="/fifthpage">FifthPage</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={FirstPage} />
        <Route exact path="/secondpage" component={SecondPage} />
        <Route exact path="/thirdpage" component={ThirdPage} />
        <Route exact path="/fourthpage" component={FourthPage} />
        <Route exact path="/fifthpage" component={FifthPage} />
      </div>
    );
  }
}

export default App;
