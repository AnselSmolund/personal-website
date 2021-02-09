import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
