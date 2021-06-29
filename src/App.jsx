import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import NavComponent from "./components/NavComponent";
import About from "./components/About";
import Dev from "./components/Dev";
import Cycle from "./components/Cycle";
import Photos from "./components/Photos";

const Container = styled.div`
  font-family: "Spartan", sans-serif;
`;

const App = () => {
  return (
    <Container>
      <NavComponent />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dev" component={Dev} />
          <Route path="/photos" component={Photos} />
          <Route path="/cycling" component={Cycle} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
