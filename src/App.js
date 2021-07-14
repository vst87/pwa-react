import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ClickMe</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/users" component={Users}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
